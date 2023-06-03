import React from "react";
import { View, Text } from "react-native";
const FlexBoxScreen = () => {
  return (
    <View style={{ backgroundColor: "gray", flex: 1 }}>
      <View
        style={{
          backgroundColor: "gray",
          flex: 0.5,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {/* space-evenly, space-around, space-between, center, flex-start, flex-end */}
        <View
          style={{
            backgroundColor: "#337bd4",
            flex: 1.2,
          }}
        ></View>
        <View style={{ backgroundColor: "#d43393", flex: 0.9 }}></View>
        <View
          style={{
            backgroundColor: "gray",
            flex: 1.5,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <View style={{ backgroundColor: "blue", flex: 0.5 }}></View>
          <View style={{ backgroundColor: "black", flex: 1.5 }}></View>
          <View style={{ backgroundColor: "green", flex: 0.9 }}></View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "gray",
          flex: 3,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {/* space-evenly, space-around, space-between, center, flex-start, flex-end */}
        <View
          style={{
            backgroundColor: "#33d45b",
            flex: 1.3,
          }}
        ></View>
        <View style={{ backgroundColor: "#3833d4", flex: 1 }}></View>
        <View style={{ backgroundColor: "#db5325", flex: 1.5 }}></View>
      </View>
    </View>
  );
};

export default FlexBoxScreen;
