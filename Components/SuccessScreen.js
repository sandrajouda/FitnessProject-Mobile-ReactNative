import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SuccessScreen = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Success Screen
            </Text>
        </View>
    );

};
export default SuccessScreen;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: '300',
        color: "black",
    }
});