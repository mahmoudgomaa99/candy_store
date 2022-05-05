import { useWindowDimensions, View } from "react-native";
import i18n from "i18n-js";
import Svg from "../../../components/atoms/Svg";
import TextView from "../../../components/atoms/TextView";
import { styles } from "./styles";

const Item = ({ item }: any) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.itemContainer, { width }]}>
      <Svg name={item.svgName} size={400} style={styles.image} />
      <View style={styles.textContainer}>
        <TextView title={i18n.t(item.title)} style={styles.title} />
        <TextView title={i18n.t(item.description)} style={styles.description} />
      </View>
    </View>
  );
};

export default Item;
