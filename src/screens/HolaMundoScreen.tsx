import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 30,
  },
});

export const HolaMundoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Hola Mundo!</Text>
    </View>
  );
};
