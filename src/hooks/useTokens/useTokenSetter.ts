import { useCallback } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doSetToken } from "../../redux/tokens/actions";

const useTokensSetter = () => {
  const dispatch = useDispatch();
  const setTokens = useCallback(
    (key: string, value: any) => {
      dispatch(doSetToken({ key, value }));
      if (value) AsyncStorage.setItem(key, value);
    },
    [dispatch]
  );
  const resetTokens = useCallback(
    (key: string) => {
      dispatch(doSetToken({ key, value: null }));
      AsyncStorage.removeItem(key);
    },
    [dispatch]
  );

  return { setTokens, resetTokens };
};
export default useTokensSetter;
