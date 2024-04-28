import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/auth/slice";

export const Logout = () => {
  const dispatch = useDispatch();
  return (
    <MaterialIcons
      name="logout"
      color={"red"}
      size={26}
      style={{ marginRight: 20 }}
      onPress={() => {
        dispatch(setAuth(false));
      }}
    />
  );
};
