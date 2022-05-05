import { StyleSheet } from "react-native";
import { COLORS } from "../../../../values/Color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  iconContainer: {
    flex: 5,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  buttonsContainers: {
    flex: 1,
    width: "100%",
  },
  image: {},
  loginBtn: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    padding: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signupBtn: {
    backgroundColor: COLORS.white,
    color: COLORS.primary,
    padding: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  login_txt: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "500",
  },
  singup_txt: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: "500",
  },
});
