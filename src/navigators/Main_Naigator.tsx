import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/Main_Screens/MainScreen";
import SearchScreen from "../screens/Main_Screens/SearchScreen";

const Stack = createNativeStackNavigator();

const Main_Naigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main_Naigator;
