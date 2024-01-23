import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
          headerStyle: {
            backgroundColor: "#f0f0f0",
          },
          headerRight: () => (
            <AntDesign
              style={styles.navButton}
              name="arrowright"
              size={24}
              onPress={() => navigation.navigate("Second")}
            />
          ),
        });
    }, [])

    return (
        <View style="{styles.container">
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    navButton: {
        marginRight: 5,
        padding: 4,
    }
});