import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>BoxOBjectModel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  tittle: {
    fontSize: 30,
    padding: 10,
    backgroundColor: 'red',
    borderWidth: 10,
    textAlign: 'center',
  },
});
