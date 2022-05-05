import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { COLORS } from "./src/values/Color";
import { store } from "./src/redux/store";
import "./src/i18n";
import Constants from "expo-constants";
import { ReactComponentElement, useEffect } from "react";
import { I18nManager } from "react-native";
import i18n from "i18n-js";
import * as SplashScreen from "expo-splash-screen";
import NavigatorHandler from "./src/navigators/NavigatorHandler";
import Bugsnag from "@bugsnag/expo";
import React from "react";
import NeedsInternetConnection from "./src/screens/NeedsInternetConnection";

const RenderApp = ({
  children,
}: {
  children: ReactComponentElement<any, any>;
}) => children;

export default function App() {
  const hideAsync = async () => {
    await SplashScreen.hideAsync();
  };
  useEffect(() => {
    Bugsnag.start(Constants.manifest?.extra?.BUGSNAG_KEY);
  }, []);

  useEffect(() => {
    hideAsync();
    if (i18n.locale === "ar") {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
  }, [i18n.locale]);

  const ErrorBoundary =
    Bugsnag.getPlugin("react")?.createErrorBoundary(React) || RenderApp;

  return (
    <ErrorBoundary FallbackComponent={NeedsInternetConnection}>
      <Provider store={store}>
        <StatusBar backgroundColor={COLORS.primary} />
        <NavigatorHandler />
      </Provider>
    </ErrorBoundary>
  );
}
