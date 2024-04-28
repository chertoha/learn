import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyboardForm = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const closeKeyboard = () => {
    setIsKeyboardOpen(false);
    Keyboard.dismiss();
  };

  const onInputFocus = () => {
    setIsKeyboardOpen(true);
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyboardOpen(false);
    });

    // return () => {
    //   Keyboard.removeAllListeners("keyboardDidHide");
    // };
  }, []);

  return { onInputFocus, isKeyboardOpen, closeKeyboard };
};
