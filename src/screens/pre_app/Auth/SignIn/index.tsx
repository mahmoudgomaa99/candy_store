import { TouchableOpacity, View } from "react-native";
import TextView from "../../../../components/atoms/TextView";
import Svg from "../../../../components/atoms/Svg";
import { COLORS } from "../../../../values/Color";
import { styles } from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import I18n from "i18n-js";
import SignInForm from "../../../../forms/forms/SignInForm";

const SignIn = () => {
  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      contentContainerStyle={styles.container}
    >
      <View style={styles.iconContainer}>
        <Svg
          name="default"
          size={300}
          bgColor={COLORS.primary}
          txtColor={COLORS.white}
        />
        <TextView title={"login"} style={styles.login_txt} />
      </View>
      <View style={styles.contentContainers}>
        <SignInForm />
        <View style={styles.forget_container}>
          <TextView
            style={styles.forget_me_text}
            title={I18n.t("forget_password")}
          />
          <TextView
            style={styles.click_here_txt}
            title={I18n.t("click_here")}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignIn;
