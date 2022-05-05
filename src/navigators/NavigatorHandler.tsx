import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import User from "../redux/user";
import Bugsnag from "@bugsnag/expo";
import useTokens from "../hooks/useTokens";
import {
  navigationRef,
  isReadyRef,
  navigateRootNavigation,
} from "./RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main_Naigator from "./Main_Naigator";
import PreAppNavigator from "./PreAppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import NeedsInternetConnection from "../screens/NeedsInternetConnection";
import Search_Text_Input from "../components/molecules/Search_Text_Input";
import SplashScreen from "../screens/pre_app/SplashScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BoardingScreen from "../screens/pre_app/OnBoarding";

const NavigatorHandler = () => {
  const currentUser = useSelector(User.selectors.currentUser);
  const isSplashDoneSelector = useSelector(
    (state: any) => state.splash.splashDone
  );
  const { isLoading } = useTokens();
  const [isNavigationLoading, setIsNavigationLoading] = useState(true);

  const getIsBoardingViewed = async () => {
    const isBoardingViewed = await AsyncStorage.getItem("isBoardingViewed");
    return isBoardingViewed === "true";
  };

  const createNavigationContainer =
    Bugsnag.getPlugin("reactNavigation")?.createNavigationContainer;

  const BugsnagNavigationContainer = createNavigationContainer
    ? createNavigationContainer(NavigationContainer)
    : NavigationContainer;

  const setIsReady = useCallback(() => {
    (isReadyRef as any).current = true;
    setIsNavigationLoading(false);
  }, []);

  const renderSwitch = useCallback(() => {
    if (!isSplashDoneSelector) return <SplashScreen />;
    if (!getIsBoardingViewed()) return <BoardingScreen />;
    if (currentUser) {
      return (
        <>
          <Search_Text_Input
            onPress={() => navigateRootNavigation("Search", {})}
          />
          <Main_Naigator />
        </>
      );
    } else return <PreAppNavigator />;
  }, [
    isLoading,
    isNavigationLoading,
    currentUser,
    getIsBoardingViewed,
    isSplashDoneSelector,
  ]);

  return (
    <SafeAreaProvider>
      <BugsnagNavigationContainer ref={navigationRef} onReady={setIsReady}>
        <NeedsInternetConnection>{renderSwitch()}</NeedsInternetConnection>
      </BugsnagNavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigatorHandler;
