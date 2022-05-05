import { Animated, View, useWindowDimensions } from "react-native";
import { styles } from "./styles";

const Paginator = ({ data, scrollX }: any) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.paginatorConstainer}>
      {data.map((_: any, index: number) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 20, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
