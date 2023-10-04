import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [contador, setContador] = useState(0);
  const handleCounter = (operation: 'add' | 'substract') => {
    if (operation === 'add') {
      setContador(contador + 1);
    } else if (operation === 'substract') {
      setContador(contador - 1);
    } else {
      setContador(0);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Contador {contador}</Text>
      <Fab
        title="+1"
        position="fabLocationBr"
        onpress={() => handleCounter('add')}
      />
      <Fab
        title="-1"
        position="fabLocationBl"
        onpress={() => handleCounter('substract')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  font: {
    fontSize: 30,
    textAlign: 'center',
  },
});
