import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function (props) {
  return (
    <View>
      <TextInput
        multiline={true}
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
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    margin: 8,
    padding: 10,
  },
});
