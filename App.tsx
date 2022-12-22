import React from 'react';
import { SafeAreaView } from 'react-native';
import TareasScreen from './src/screens/TareasScreen';
// import FlexScreen from './src/screens/FlexScreen';
// import ContadorScreen from './src/screens/ContadorScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import DimensionesScreen from './src/screens/DimensionesScreen';
// import PositionScreen from './src/screens/PositionScreen';
// import PositionScreen from './src/screens/PositionScreen';



 const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* //  <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareasScreen />
    </SafeAreaView>
  );
};


export default App;
