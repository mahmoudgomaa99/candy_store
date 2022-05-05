import { ReactNode } from "react";
import TextView from "../../components/atoms/TextView";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNetInfo } from "@react-native-community/netinfo";
import { styles } from "./styles";
import { Modal, View } from "react-native";
import i18n from "i18n-js";

type Props = {
  children: ReactNode;
  isVisible?: boolean;
};
const NeedsInternetConnection = ({ children }: Props) => {
  const { isInternetReachable, details } = useNetInfo();
  if (!details) return null;
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isInternetReachable === false}
      >
        <View style={styles.constainer}>
          <FontAwesomeIcon icon="wifi-slash" size={60} style={styles.icon} />
          <TextView
            style={styles.titleTextStyling}
            title={i18n.t("noNetworkTitle")}
          />
          <TextView
            stylingProps={styles.contentTextStyling}
            title={i18n.t("noNetworkContent")}
          />
        </View>
      </Modal>
      {children}
    </>
  );
};

export default NeedsInternetConnection;
