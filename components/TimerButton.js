import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import styles from '../styles';

export default function TimerButton({ action }) {
  return (
    <Button style={styles.timerButton} onPress={action}>
      <Text style={styles.text}>Start Timer</Text>
    </Button>
  );
}
