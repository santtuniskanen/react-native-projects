import { useEffect, useState } from 'react';
import { Button, Text, TextInput, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { MESSAGES, addDoc, firestore, serverTimestamp } from './firebase/config';
import { querySnapshot, onSnapshot, query, collection } from 'firebase/firestore';
import Constants from 'expo-constants';
import { convertFirebaseTimeStampToJS } from './helpers/Functions';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const save = async() => {
    const docRef = await addDoc(collection(firestore, MESSAGES), {
      text: newMessage,
      created: serverTimestamp()
    }).catch (error => console.log(error))
    setNewMessage('')
    console.log('Message saved.')
  }

  useEffect(() => {
    const q = query(collection(firestore, MESSAGES))

    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      const tempMessages = []
      querySnapshot.forEach((doc) => {
        const messageObject = {
          id: doc.id,
          text: doc.data().text,
          created: convertFirebaseTimeStampToJS(doc.data().created)
        }
        tempMessages.push(messageObject)
      })
      setMessages(tempMessages)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          messages.map((message) => (
            <View style={styles.message} key={message.id}>
              <Text style={styles.message}>{message.created}</Text>
              <Text>{message.text}</Text>
            </View>
          ))
        }
      </ScrollView>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <TextInput style={{flex: 0.75}} placeholder='Send message...' value={newMessage} onChangeText={text => setNewMessage(text)}/>
        <Button style={{flex: 0.25}} title="Send" type="button" onPress={save} />
      </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
  message: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10
  }
});
