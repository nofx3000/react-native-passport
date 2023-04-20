import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import Modal from '../components/Modal';
import {
  Header,
  Body,
  Content,
  ContentProps,
} from '../components/HomeComponents';

const data: ContentProps[] = [
  {
    type: 'game',
    data: [
      {
        id: '1',
        name: 'qq',
        acount: 'qqsds',
        password: '12321',
      },
    ],
  },
  {
    type: 'platform',
    data: [
      {
        id: '1',
        name: 'qq',
        acount: 'qqsds',
        password: '12321',
      },
      {
        id: '1',
        name: 'qq',
        acount: 'qqsds',
        password: '12321',
      },
    ],
  },
  {
    type: 'bank',
    data: [
      {
        id: '1',
        name: 'qq',
        acount: 'qqsds',
        password: '12321',
      },
      {
        id: '1',
        name: 'qq',
        acount: 'qqsds',
        password: '12321',
      },
      {
        id: '1',
        name: 'qq',
        acount: 'qqsds',
        password: '12321',
      },
      {
        id: '1',
        name: 'qq',
        acount: 'qqsds',
        password: '12321',
      },
      {
        id: '1',
        name: 'qq',
        acount: 'qqsds',
        password: '12321',
      },
      {
        id: '1',
        name: 'qq',
        acount: 'qqsds',
        password: '12321',
      },
    ],
  },
];

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
        {data.map((item, index) => (
          <Content type={item.type} data={item.data} key={index} />
        ))}
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
