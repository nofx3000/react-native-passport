import React from 'react';
import {StyleSheet, Text, Modal, View} from 'react-native';
import {Header, Selection, Input, Button} from './FormComponents';

function App(): JSX.Element {
  return (
    <Modal
      visible={false}
      transparent={false}
      statusBarTranslucent={true}
      animationType="fade"
      style={styles.root}>
      <View style={styles.wrapper}>
        <View style={styles.form}>
          <Header />
          <Selection />
          <Input title="name" />
          <Input title="acount" />
          <Input title="password" />
          <Button />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {},
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000060',
  },
  form: {
    width: '80%',
    borderRadius: 12,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default App;
