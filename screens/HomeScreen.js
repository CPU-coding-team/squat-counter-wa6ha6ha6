import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Camera')}>Go to Camera Screen</Button>
    </View>
  );
}

// Link to model: https://teachablemachine.withgoogle.com/models/BSDux-w-t/
