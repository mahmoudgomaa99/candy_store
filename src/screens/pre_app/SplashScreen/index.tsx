import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../values/Color";
import Svg from "../../../components/atoms/Svg";
import { useAppDispatch } from "../../../redux/store";
import { useEffect } from "react";
import User from "../../../redux/user";
import Splash from "../../../redux/_splash";

const SplashScreen = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(User.thunks.doGetCurrentUser()).then(() => {
      setTimeout(() => {
        dispatch(Splash.actions.doSetSplashDone({}));
      }, 1500);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Svg
        name="default"
        size={300}
        bgColor={COLORS.primary}
        txtColor={COLORS.white}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
