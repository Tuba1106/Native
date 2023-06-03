import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>HomePage</Text>
      <Button
        title="nevtreh"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        title="Burtguuleh"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <Button
        title="FlexBox"
        onPress={() => {
          navigation.navigate("FlexBox");
        }}
      />
    </View>
  );
};

export default Home;
