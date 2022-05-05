import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Image_Slider from "../../components/molecules/Image_Slider";
import { COLORS } from "../../values/Color";
import Category from "../../components/organisms/Category";
import { MarginsAndPaddings } from "../../values/Dimensions";

const Home = () => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.sliderWrapper}>
        <Category />
      </View>
      {/* <Image_Slider /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainWrapper: { height: "100%" },
  sliderWrapper: {
    paddingBottom: MarginsAndPaddings.xxl,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
