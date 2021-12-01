import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

export default function TimerText({ timeLeft, cycleLeft }) {
  return (
    <View>
      <Text style={styles.timerText}>{timeLeft} seconds left</Text>
      <Text style={styles.timerText}>You have {cycleLeft} cycles left!</Text>
    </View>
  );
}
