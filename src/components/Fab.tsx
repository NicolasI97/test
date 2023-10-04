import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type FabProps = {
  title: string;
  position: 'fabLocationBl' | 'fabLocationBr';
  onpress: () => void;
};

const styles = StyleSheet.create({
  fabLocationBr: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBl: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export const Fab = ({position, title, onpress}: FabProps) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles[position]}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
