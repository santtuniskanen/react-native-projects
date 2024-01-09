import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View} from "react-native";

export default function App() {
  const [euros, setEuros] = useState("");
  const [pounds, setPounds] = useState(0);

  function change(text) {
    setEuros(text);
    const result = euros.replace(",", ".") * 0.86;
    setPounds(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Euros</Text>
      <TextInput style={styles.field} value={euros} onChangeText={text => change(text)} keyboardType="decimal-pad"/>
      <Text style={styles.field}>Pounds</Text>
      <Text style={styles.field}>{pounds.toFixed(2)}</Text>
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
