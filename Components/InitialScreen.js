import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Button from "./Button";
import { RFValue } from "react-native-responsive-fontsize";

const InitialScreen = () => {



    const Navigation = useNavigation();

    const onInitialPress = () => {
        Navigation.navigate('SignUp');

    }
    const onLoginPress = () => {
        Navigation.navigate('SignIn');
    

    }

    return (
        <View style={styles.body}>
            <ImageBackground source={require('../assets/Images/DD.png')}
                style={styles.background}>

                <Image source={require('../assets/Images/EEEE.png')}
                        style={styles.logo}/>

                <Text style={styles.text}>
                Make yourself stronger than your excuses
                </Text>

                <View style={styles.footer}>
                <Button text="Get Started" onPress={onInitialPress} Type="GET" />
                <Button text="Or Login" onPress={onLoginPress} Type="LOGIN" />
                </View>

            </ImageBackground>
            

        </View>
    );

};
export default InitialScreen;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: '300',
        color: `#d3d3d3`,
        textAlign:'center',
        marginHorizontal:50,
    },
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    logo: {
        width: RFValue(130),
        height: RFValue(130),
        marginTop: RFValue(50),
        marginBottom: RFValue(20),

    },
    footer:{
    position:'absolute',
    bottom:0,
    width:'100%',
    alignItems: 'center',
    },
  
});