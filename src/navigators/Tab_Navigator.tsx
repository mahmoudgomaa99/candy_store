import { COLORS } from "../values/Color";
import Home from "../screens/Tab_Navigator_Screens/Home";
import Cart from "../screens/Tab_Navigator_Screens/Cart";
import Profile from "../screens/Tab_Navigator_Screens/Profile";
import IonIcons from "react-native-vector-icons/Ionicons";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import I18n from "i18n-js";

const Tab = AnimatedTabBarNavigator();

const Tab_Navigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      appearance={{
        activeColors: COLORS.white,
        activeTabBackgrounds: COLORS.primary,
      }}
    >
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarLabel: I18n.t("cart"),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }: any) =>
            !focused ? (
              <IonIcons name="cart-outline" color={color} size={24}></IonIcons>
            ) : (
              <IonIcons name="cart" color={color} size={24}></IonIcons>
            ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: I18n.t("home"),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }: any) =>
            !focused ? (
              <IonIcons name="home-outline" color={color} size={24}></IonIcons>
            ) : (
              <IonIcons name="home" color={color} size={24}></IonIcons>
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarLabel: I18n.t("profile"),
          tabBarIcon: ({ focused, color, size }: any) =>
            !focused ? (
              <IonIcons
                name="person-outline"
                color={color}
                size={24}
              ></IonIcons>
            ) : (
              <IonIcons name="person" color={color} size={24}></IonIcons>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tab_Navigator;
