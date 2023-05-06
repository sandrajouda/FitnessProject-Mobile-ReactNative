import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

    const Navigation = useNavigation();

    const onSingInPress = () => {
        Navigation.navigate('Name');

    }

    return (
        <View style={styles.body}>
            <Text style={styles.text} onPress={onSingInPress} >
                SignIn Screen
            </Text>
        </View>
    );

};
export default SignInScreen;

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