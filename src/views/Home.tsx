import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from '../components/Modal';
import {
  Header,
  Body,
  Content,
  ContentProps,
  DataType,
} from '../components/HomeComponents';
import {ModalContext} from '../contexts/ModalContext';
import icon_add from '../assets/icon_add.png';

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
    ],
  },
  {
    type: 'other',
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
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const showModal = (data?: DataType) => {
    setModalIsVisible(true);
    if (data) {
      console.log(data);
    }
  };
  const closeModal = () => {
    setModalIsVisible(false);
  };

  return (
    <View style={styles.root}>
      <ModalContext.Provider value={{closeModal, showModal}}>
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
        <TouchableOpacity onPress={showModal}>
          <Image source={icon_add} style={styles.add} />
        </TouchableOpacity>
        <Modal visible={modalIsVisible} />
      </ModalContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  add: {
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
});

export default App;
