import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { colors, parameters } from "../global/styles";


import { Icon } from "react-native-elements";

export default function Header({ title,navigation}) {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 20 }}>
      <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ flex: 1, alignItems: "flex-start", justifyContent: "flex-start" }}
        >
          <Image
            style={{ width: 30, height: 30}}
            source={require("../screens/pngegg.png")}
            
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },
  headerText: {
    color: colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 30,
  },
});