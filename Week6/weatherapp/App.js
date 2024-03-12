import { StyleSheet, Text, View } from 'react-native';
import Position from './components/Position';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#ADD8E6','#FFFFFF']}
      style={styles.container}
    >
      <Text style={styles.heading}>Current Weather</Text>
      <Position />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 50, // Adjust this value according to your needs
  },
  heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
  },
});
