import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { Camera } from "expo-camera";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as tf from "@tensorflow/tfjs";
import {
  cameraWithTensors,
  fetch,
  bundleResourceIO,
} from "@tensorflow/tfjs-react-native";

import styles from "../styles";
import TimerText from "../components/TimerText";
import TimerButton from "../components/TimerButton";
// import GoodCamera from "../components/GoodCamera";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [startTimer, setStartTimer] = useState(false);
  const [second, setSecond] = useState(5);
  const [cycle, setCycle] = useState(3);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (startTimer == true) {
      let interval = setInterval(() => {
        setSecond((currentSecond) => {
          return currentSecond - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTimer]);

  useEffect(() => {
    if (second === 0) {
      setCycle((currentCycle) => {
        return currentCycle - 1;
      });
      setSecond(5); //initial value
    }
  }, [second]);

  useEffect(() => {
    if (cycle === 0) {
      setStartTimer(false);
      setCycle(3);
    }
  }, [cycle]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  async function loadModel() {
    const modelJson = require("../assets/model.json");
    const modelWeights = require("../assets/model.weights.bin");
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ratio={"16:9"}>
        <View style={styles.timerContainer}>
          <TimerText timeLeft={second} cycleLeft={cycle} />
          <TimerButton action={() => setStartTimer(true)} />
        </View>
      </Camera>
    </View>
  );
}
