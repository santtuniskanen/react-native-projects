import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './screens/Home';
import MyStatusbar from './components/MyStatusbar';

export default function App() {
  return (
    <>
    <MyStatusbar backgroundColor='#00a484' barStyle='light-content' />
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
