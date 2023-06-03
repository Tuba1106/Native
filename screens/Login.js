import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Image, Alert } from "react-native";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import MyTextArea from "../components/MyTextArea";

const Login = ({ navigation }) => {
  const onAlert = () => {
    Alert.alert("Newterlee");
  };
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  return (
    <View>
      <Image
        style={{ width: "100%", height: "40%" }}
        source={require("../../assets/img/mouse.jpeg")}
      />
      <Text style={{ textAlign: "center" }}>{text}</Text>
      <MyTextArea onChangeText={setText}></MyTextArea>
      <Text style={{ textAlign: "center" }}>
        {phone}~~~~~{password}
      </Text>
      <MyInput
        keyboardType="number-pad"
        placeholder="Newtreh dugaar oruulna uu"
        onChangeText={setPhone}
      />
      <MyInput
        secureTextEntry={true}
        placeholder="Passwordoo oruulna uu"
        onChangeText={setPassword}
      />
      <MyButton style={css.btn1} title="Newtreh" onPress={onAlert} />
      <MyButton
        style={css.btn2}
        title="Butsah"
        onPress={() => navigation.pop()}
      />
    </View>
  );
};

const css = StyleSheet.create({
  btn1: {
    borderWidth: 2,
    backgroundColor: "aqua",
    borderRadius: 5,
  },
  btn2: {
    borderWidth: 2,
    borderColor: "aqua",
    backgroundColor: "white",
    borderRadius: 5,
  },
});

export default Login;
