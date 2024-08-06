import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Expo</Text>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>


        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }} />
      </TouchableOpacity>
      <Button
        color="orange"
        title="Button"
        onPress={() => alert("Button tapped")} />
    </SafeAreaView >
  );
}


// following are javascript properties and not css

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
