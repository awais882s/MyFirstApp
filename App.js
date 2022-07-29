import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
export default function App() {
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.h1}>App</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  flexContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
    flex: 1
  },
  h1: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: "black"
  }
})