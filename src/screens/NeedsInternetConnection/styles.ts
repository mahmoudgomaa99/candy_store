import { StyleSheet } from "react-native";
import { COLORS } from "../../values/Color";
import { MarginsAndPaddings } from "../../values/Dimensions";

export const styles = StyleSheet.create({
  constainer: {
    backgroundColor: COLORS.alfaBlack,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleTextStyling: {
    marginTop: MarginsAndPaddings.m,
    fontWeight: "bold",
    fontSize: 22,
    color: COLORS.white,
  },
  contentTextStyling: {
    marginVertical: MarginsAndPaddings.m,
    textAlign: "center",
    fontSize: 14,
    color: COLORS.white,
  },
  icon: {
    marginVertical: MarginsAndPaddings.l,
    color: COLORS.lightGrey,
  },
});
