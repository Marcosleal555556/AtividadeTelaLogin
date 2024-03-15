import { View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function ContainerLogin({ children }) {
  return <View style={styles.cardLogin}>{children}</View>;
}
