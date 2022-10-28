import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AnimateView from './views/AnimateView';
import AnimateView2 from './views/AnimateView2';
import AnimateView3 from './views/AnimateView3';

export default function App() {
  return (
    <View style={styles.container}>
      <AnimateView3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:100
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
