import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default function Home() {
    return (
        <View style={styles.flexContainer}>
            <View style={styles.box}></View>
            {/* <Text style={styles.h1}>Home Page </Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    flexContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flex: 1
    },
    h1: {
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: "#00bbf9",
        borderRadius: 10
    }
})