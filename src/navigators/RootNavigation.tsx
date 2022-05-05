import { createNavigationContainerRef } from "@react-navigation/native";
import React from "react";

export const isReadyRef = React.createRef();

export const navigationRef = createNavigationContainerRef();

export function navigateRootNavigation(name: any, params: any) {
  if (navigationRef.isReady()) {
    if (params) {
      navigationRef.navigate(name, params);
    } else {
      navigationRef.navigate(name);
    }
  }
}

export const goBackRootNavigation = () => {
  navigationRef.goBack();
};
