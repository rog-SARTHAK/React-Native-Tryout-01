//Absolute and relative positioning

import React from "react";
import { View } from 'react-native';

export default function App() {

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // other param: column
        justifyContent: "center", // other param: center, flex-end, flex-start, space-around, space-evenly, space-between,
        alignItems: "center", // other param: center, flex-start, flex-end
        alignContent: "center",

      }}
    >
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        top: 20,
        right: 40,
        position: 'absolute', // default 'relative'

      }} />

      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,

      }} />

      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100,
        bottom: 20,
      }} />



    </View >
  );
}
