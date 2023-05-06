import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';



function Button({ onPress, text, Type }) {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${Type}`]]}>
            <Text style={[styles.text, styles[`text_${Type}`]]}> {text}</Text>
        </Pressable>
    );
}
export default Button;
const styles = StyleSheet.create({
    container: {
        width: 300,
        borderRadius: 7,
        marginVertical: 25,
    },
    container_GET: {
        backgroundColor: `#daa520`,
        alignItems: 'center',
        padding: 20,
        margin: 50,

    },
    container_LOGIN: {
        alignItems: 'center',
        margin: 20,
    },
    text_GET: {
        color: `#fffafa`,
        fontSize: 20,

    },
    text_LOGIN: {
        color: `#fffafa`,
        fontSize: 25,
        textDecorationLine: 'underline',
        marginBottom:20,
    }
})

