import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
    backgroundColor: "red",
    flex: 1
  },
  h1: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center"
  }
})