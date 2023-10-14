import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajamorada}></View>
      <View style={styles.cajanaranja}></View>
      <View style={styles.cajaVerde}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28c3d9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 400,
    // width: 400,
  },
  cajamorada: {
    backgroundColor: '#5856d6',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cajanaranja: {
    backgroundColor: '#d66756',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cajaVerde: {
    backgroundColor: 'green',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    // ...StyleSheet.absoluteFillObject,
  },
});
