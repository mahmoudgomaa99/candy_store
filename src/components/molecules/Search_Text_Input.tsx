import { TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import i18n from "i18n-js";

const Search_Text_Input = ({ onPress }: any) => {
  return (
    <SafeAreaView style={styles.serchTextInput_container}>
      <TextInput
        placeholder={i18n.t("search")}
        style={styles.serchTextInput_textInput}
        onTouchStart={onPress}
      />
    </SafeAreaView>
  );
};

export default Search_Text_Input;
