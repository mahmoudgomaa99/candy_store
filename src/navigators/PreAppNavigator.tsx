import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/pre_app/Auth/Welcome";
import SignUp from "../screens/pre_app/Auth/SignUp";
import SignIn from "../screens/pre_app/Auth/SignIn";

const Stack = createNativeStackNavigator();

const PreAppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"splash"}>
      <Stack.Screen
        name="welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signin"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PreAppNavigator;

const styles = StyleSheet.create({});
