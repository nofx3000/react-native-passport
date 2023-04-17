import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Modal from '../components/Modal';
import {Header, Body} from '../components/HomeComponents';

function App(): JSX.Element {
  return (
    <View style={styles.root}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="#30303060"
      />
      <Header />
      <Body>
        <Header />
      </Body>
      <Modal />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
});

export default App;
