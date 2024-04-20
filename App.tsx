import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Start from './drawer/Start';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <NavigationContainer>
          <Start />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
