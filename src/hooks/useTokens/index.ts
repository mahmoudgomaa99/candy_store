import useCheckupSetter from "./useTokenSetter";
import { unwrapResult } from "@reduxjs/toolkit";
import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TokenKeys } from "../../constants";
import { useAppDispatch } from "../../redux/store";
import Users from "../../redux/user";
import { useSelector } from "react-redux";

const useTokens = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatchApp = useAppDispatch();
  const { setTokens, resetTokens } = useCheckupSetter();
  const valueUserToken = useSelector(
    (state: any) => state.tokens[TokenKeys.USER_TOKEN]
  );
  const currentUser = useSelector(Users.selectors.currentUser);
  useEffect(() => {
    const checkTokens = async () => {
      const storedValues = await AsyncStorage.multiGet(
        Object.values(TokenKeys)
      );
      storedValues.forEach(([paramKey, paramValue]) =>
        setTokens(paramKey, paramValue)
      );
    };

    checkTokens();
  }, [setTokens]);

  const fetchCurrentUser = useCallback(
    () =>
      dispatchApp(Users.thunks.doGetCurrentUser())
        .then(unwrapResult)
        .then(() => setIsLoading(false))
        .catch((_: any) => {
          setIsLoading(false);
        }),
    [dispatchApp, resetTokens]
  );

  useEffect(() => {
    if (valueUserToken !== undefined) {
      if (valueUserToken && !currentUser) fetchCurrentUser();
      else setIsLoading(false);
    }
  }, [currentUser, fetchCurrentUser, valueUserToken]);

  return {
    isLoading,
  };
};

export default useTokens;
