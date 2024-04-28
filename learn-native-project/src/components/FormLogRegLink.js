import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { commonStyles } from "../styles/common";

export const FormLogRegLink = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={commonStyles.logRegLink} onPress={onPress}>
      <Text style={commonStyles.logRegLinkText}>{children}</Text>
    </TouchableOpacity>
  );
};
