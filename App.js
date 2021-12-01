import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [tfReady, setTfReady] = useState(false);

  async function initialize() {
    await tf.ready();
    setTfReady(true);
  }

  initialize();

  return (
    tfReady && (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
