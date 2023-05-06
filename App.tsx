import React from "react";
import {View } from "react-native";
import InitialScreen from "./Components/InitialScreen";
import SignInScreen from "./Components/SignInScreen";
import SignUpScreen from "./Components/SignUpScreen";
import NameScreen from "./Components/NameScreen";
import DataScreen from "./Components/DataScreen";
import WorkoutFrequencyScreen from "./Components/WorkoutFrequencyScreen";
import SuccessScreen from "./Components/SuccessScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App =()=>{
  const Stack = createNativeStackNavigator();
  return(
<View style={{flex:1}}>
<NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="Initial" component={InitialScreen} />
         <Stack.Screen name="SignUp" component={SignUpScreen} />
         <Stack.Screen name="SignIn" component={SignInScreen}/>
         <Stack.Screen name="Name" component={NameScreen}/>
         <Stack.Screen name="Date" component={DataScreen}/>
         <Stack.Screen name="Workout" component={WorkoutFrequencyScreen}/>
         <Stack.Screen name="Success" component={SuccessScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
</View>
  );
};
export default App;
