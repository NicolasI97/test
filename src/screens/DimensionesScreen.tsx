import React from 'react';
import {
  //   Dimensions,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.cajaMorada,
            width: width * 0.5,
          }}></View>
        <View style={styles.cajaNaranja}></View>
      </View>
      <Text style={styles.tittle}>
        W: {width}, H: {height} {'\n'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
  },
  tittle: {
    fontSize: 30,
    padding: 10,
    backgroundColor: 'red',
    borderWidth: 10,
    textAlign: 'center',
  },
});
