import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  camera: {
    flex: 1,
  },
  timerContainer: {
    flex: 1,
    backgroundColor: "transparent",
    margin: 20,
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  timerText: {
    margin: 24,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  timerButton: {
    color: "white",
  },
});

export default styles;
