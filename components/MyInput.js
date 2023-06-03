import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function (props) {
  return (
    <View>
      {/* <Text style={{ textAlign: "center" }}></Text> */}
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        style={css.inputField}
        {...props}
      />
    </View>
  );
}

const css = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: "blue",
    margin: 8,
    padding: 10,
  },
});
