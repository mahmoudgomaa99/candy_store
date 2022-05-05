import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { COLORS } from "../../../values/Color";
import { AntDesign } from "@expo/vector-icons";
import i18n from "i18n-js";
import { useRef } from "react";
import { useEffect } from "react";

const NextButton = ({ percentage, onPress }: any) => {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef: any = useRef(null);

  const animation = (toValue: any) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  }, [percentage]);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke={COLORS.buttonGray}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke={COLORS.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={onPress}
      >
        <AntDesign
          size={32}
          name={i18n.locale === "ar" ? "arrowleft" : "arrowright"}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    padding: 20,
  },
});

export default NextButton;
