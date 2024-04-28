import AuthView from "../components/AuthView";
import { Login } from "../components/Login";

export const LoginScreen = () => {
  return <AuthView WrappedComponent={Login} />;
};
