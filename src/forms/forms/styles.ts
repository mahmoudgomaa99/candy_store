import { StyleSheet } from "react-native";
import { COLORS } from "../../values/Color";

export const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primary,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 15,
    marginTop: 15,
    marginHorizontal: 20,
  },
  btn_txt: {
    color: COLORS.white,
    fontSize: 20,
  },
});
