import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import HeaderBuilder from './Components/HeaderBuilder';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View className="bg-slate-800">
    {/* <View className="h-60 bg-white w-24"></View>
    <View className="h-60 bg-white w-24"></View> */}
      {/* <Text className="text-blue-600">Open up App.js to start working onss pp!</Text> */}
      {/* <StatusBar style="auto" /> */}
      <Home />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  overall:{
    // backgroundColor:"black",
    display:"flex",
    flexDirection:"row",
    // justifyContent:"space-between",
    height:'100%',
    width:'100%',
  },
});
