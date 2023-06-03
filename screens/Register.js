import React from "react";
import { View, StyleSheet, Text, Button, Image, TextInput } from "react-native";

const Register = ({ navigation }) => {
  return (
    <View>
      <Image
        style={{ width: "100%", height: "40%" }}
        source={require("../../assets/img/mouse.jpeg")}
      />
      <Text style={{ textalign: "center" }}>Register</Text>
      <TextInput style={css.inputField} placeholder="Nevtreh ner" />
      <TextInput
        style={css.inputField}
        placeholder="Email"
        onChangeText={(text) => {
          console.log(text);
        }}
      />
      <TextInput style={css.inputField} placeholder="Nuuts ug" />
      <TextInput style={css.inputField} placeholder="Nuuts ug davtah" />
      <Button
        title="Burtguuleh"
        onPress={() => {
          navigation.pop();
        }}
      />
      <View style={css.Button}>
        <Button
          title="Butsah"
          onPress={() => {
            navigation.pop();
          }}
        />
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: "blue",
    margin: 8,
    padding: 10,
  },
  Button: {
    marginTop: 8,
  },
});

export default Register;
