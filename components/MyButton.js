import React from "react";
import { Button, View, StyleSheet } from "react-native";

export default function (props) {
  return (
    <View style={[css.btn, props.style]}>
      <Button {...props} />
    </View>
  );
}

const css = StyleSheet.create({
  btn: {
    margin: 8,
  },
});
