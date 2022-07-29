import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import logo from "../../Assets/Images/logo.jpg";
export default function Gallery() {
    return (
        <View style={styles.flexContainer}>
            <View style={[styles.box, styles.flexCenter]}>
                <Image style={styles.image} source={logo} />
                {/* another methods to use images
                source={require("../../Assets/Images/logo.jpg")} */}
                {/* <Text style={styles.h1}>Gallery</Text> */}
            </View>
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
    flexCenter: {
        alignItems: "center",
        justifyContent: "center"
    },
    h1: {
        fontSize: 48,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    },
    box: {
        width: 250,
        height: 250,
        backgroundColor: "#efb094",
        borderRadius: 10,
        borderWidth: 5,
        borderBottomColor: "#a0e426",
        borderTopColor: "#390099",
        borderLeftColor: "#fa7921",
        borderRightColor: "#9b52de"
    },
    image: {
        width: 200,
        height: 200
    }
})