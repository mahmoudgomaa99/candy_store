import { ErrorMessage } from "formik";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TextInput as RNTextInput, TextInputProps } from "react-native";
import { COLORS } from "../../values/Color";

type TTextInput = {
  name?: string;
  error?: boolean;
};

const TextInput = (props: TextInputProps & TTextInput) => {
  return (
    <View style={styles.container}>
      <RNTextInput
        style={styles.input}
        placeholderTextColor={COLORS.placeholder}
        {...props}
      />
      {props.name && props.error && (
        <Text style={styles.text}>
          <ErrorMessage name={props.name} />
        </Text>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: { marginHorizontal: 20, marginVertical: 15 },
  input: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lightGrey,
    marginVertical: 5,
    padding: 5,
  },
  text: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    color: COLORS.darkRed,
  },
});
