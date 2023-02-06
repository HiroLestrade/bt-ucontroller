import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
//import { BleManager } from 'react-native-ble-plx';

//const manager = new BleManager();

const scan = () => {
  /* manager.startDeviceScan(null, null, (err, device) => {
    console.log(device);
  }); */
  console.log("scan");
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>BT uController</Text>
      <Button title='BT list' onPress={scan}/>
      <StatusBar style="auto" />
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
