import AuthView from "../components/AuthView";
import { Register } from "../components/Register";

export const RegistrationScreen = () => {
  return <AuthView WrappedComponent={Register} />;
};
