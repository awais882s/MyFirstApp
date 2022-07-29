import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.flexContainer}>
      <Text>App</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  }
})