/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Home from './src/views/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
});

export default App;
