import React from 'react';
import {SafeAreaView} from 'react-native';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {BoxObjectModeScreen} from './src/screens/BoxObjectMode';
// import {DimensionesScreen} from './src/screens/DimensionesScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
import {FlexboxScreen} from './src/screens/FlexboxScreen';

export default function App() {
  // return <HolaMundoScreen />;
  // return <CounterScreen />;

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectModeScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      <FlexboxScreen />
    </SafeAreaView>
  );
}
