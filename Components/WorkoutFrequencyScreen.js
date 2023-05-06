import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const WorkoutFrequencyScreen = () => {

    const Navigation = useNavigation();

    const onWorkOutPress = () => {
        Navigation.navigate('Success');

    }
    return (
        <View style={styles.body}>
            <Text style={styles.text} onPress={onWorkOutPress}>
            Workout Frequency Screen
            </Text>
        </View>
    );

};
export default WorkoutFrequencyScreen;

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