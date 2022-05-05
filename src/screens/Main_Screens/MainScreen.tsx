import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Tab_Navigator from "../../navigators/Tab_Navigator";
import { Dimensions, Keyboard } from "react-native";
import Search_Text_Input from "../../components/molecules/Search_Text_Input";
import { navigateRootNavigation } from "../../navigators/RootNavigation";

const MainScreen = () => {
  return <Tab_Navigator />;
};

export default MainScreen;
