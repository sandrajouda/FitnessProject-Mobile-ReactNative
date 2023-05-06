import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const NameScreen = () => {

    const Navigation = useNavigation();

    const onNamePress = () => {
        Navigation.navigate('Date');

    }
    return (
        <View style={styles.body}>
            <Text style={styles.text} onPress={onNamePress}>
                Name Screen
            </Text>
        </View>
    );

};
export default NameScreen;

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