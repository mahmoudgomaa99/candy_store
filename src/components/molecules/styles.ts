import { StyleSheet } from "react-native";
import { MarginsAndPaddings } from "../../values/Dimensions";
import { COLORS } from "../../values/Color";

export const styles = StyleSheet.create({
  circleBox_mainWrapper: {
    height: 100,
    width: 80,
    borderRadius: 20,
    padding: MarginsAndPaddings.s,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: MarginsAndPaddings.l,
    marginBottom: MarginsAndPaddings.l,
  },
  circleBox_img: {
    height: 40,
    width: 40,
    marginBottom: 10,
  },
  serchTextInput_container: {
    width: "100%",
    padding: MarginsAndPaddings.xxl,
    paddingHorizontal: MarginsAndPaddings.m,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  serchTextInput_textInput: {
    width: "100%",
    height: 45,
    backgroundColor: COLORS.white,
    color: COLORS.black,
    padding: MarginsAndPaddings.s,
    borderRadius: 8,
  },
});
