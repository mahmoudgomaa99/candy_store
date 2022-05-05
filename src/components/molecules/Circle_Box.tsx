import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { images } from "../../constants";
import i18n from "i18n-js";
import TextView from "../atoms/TextView";

const Circle_Box = ({ img, text }: any) => {
  return (
    <View style={styles.circleBox_mainWrapper}>
      <Image source={images.category[img]} style={styles.circleBox_img} />
      <TextView title={i18n.t(text)} />
    </View>
  );
};

export default Circle_Box;
