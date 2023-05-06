import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

    const Navigation = useNavigation();

    const onSignUpPress = () => {
        Navigation.navigate('SignIn');

    }
    return (
        <View style={styles.body}>
            <Text style={styles.text} onPress={onSignUpPress}>
                SignUp Screen
            </Text>
        </View>
    );

};
export default SignUpScreen;

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