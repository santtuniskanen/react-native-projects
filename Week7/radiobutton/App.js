import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Radiobutton from './components/Radiobutton';

export default function App() {

  const [test,setTest] = useState('No radiobutton selection');

  const options = [
    {
      label: 'Test 1',
      value: 1
    },
    {
      label: 'Test 2',
      value: 2
    }
  ]

  return (
    <View style={styles.container}>
      <Radiobutton options={options} onPress={(value) => { setTest(value) }} style={{backgroundColor: 'red'}}/>

      <Text>Radiobutton value is</Text>
      <Text>{test}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
