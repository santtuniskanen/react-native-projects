import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [age, setAge] = useState("");
  const [targetHeartrate, setTargetHeartrate] = useState(0);

  function calculate() {
    const resultLower = (220 - age) * 0.65;
    const resultUpper = (220 - age) * 0.85;
    setTargetHeartrate(resultLower.toFixed(0) + "-" + resultUpper.toFixed(0));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="decimal-pad"
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{targetHeartrate}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  },
});
