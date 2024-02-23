import Styles from "../Styles";
import React from "react";
import { useTheme } from "../context/UseTheme";
import { View, Text } from "react-native";

export default function Home() {
    const {isDarkMode} = useTheme()
    return (
        <View style={[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
            <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
        </View>
    )
}