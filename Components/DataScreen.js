import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const DataScreen = () => {

    const Navigation = useNavigation();

    const onDatePress = () => {
        Navigation.navigate('Workout');

    }

    return (
        <View style={styles.body}>
            <Text style={styles.text} onPress={onDatePress}>
                Data Screen
            </Text>
        </View>
    );

};
export default DataScreen;

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