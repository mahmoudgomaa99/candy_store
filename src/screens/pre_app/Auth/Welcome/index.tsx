import { View, TouchableOpacity } from "react-native";
import Svg from "../../../../components/atoms/Svg";
import { styles } from "./style";
import TextView from "../../../../components/atoms/TextView";
import { COLORS } from "../../../../values/Color";
import { navigateRootNavigation } from "../../../../navigators/RootNavigation";
import i18n from "i18n-js";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Svg
          name="default"
          size={300}
          bgColor={COLORS.primary}
          txtColor={COLORS.white}
        />
      </View>
      <View style={styles.buttonsContainers}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigateRootNavigation("signin", {})}
        >
          <TextView title={i18n.t("login")} style={styles.login_txt} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => navigateRootNavigation("signup", {})}
        >
          <TextView title={i18n.t("signup")} style={styles.singup_txt} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
