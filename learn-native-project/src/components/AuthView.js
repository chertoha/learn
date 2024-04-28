import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { useKeyboardForm } from "../hooks/useKeyboardForm";

export default function AuthView({ WrappedComponent }) {
  const { closeKeyboard, isKeyboardOpen, onInputFocus } = useKeyboardForm();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bgd-image.jpg")}
        style={styles.bgdImage}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={closeKeyboard}>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
            >
              <WrappedComponent
                onInputFocus={onInputFocus}
                isKeyboardOpen={isKeyboardOpen}
                closeKeyboard={closeKeyboard}
              />
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  bgdImage: {
    // paddingTop: 212,
    // flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});
