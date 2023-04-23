import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  LayoutAnimation,
} from 'react-native';
import Modal from '../components/Modal';
import {Header, Body, Content} from '../components/HomeComponents';
import {save, load} from '../utils/Storage';
import icon_add from '../assets/icon_add.png';

function App(): JSX.Element {
  const modalRef = useRef<ModalRefAttr | null>(null);
  const [sectionData, setSectionData] = useState<ContentProps[]>([]);

  useEffect(() => {
    loadData();
  }, []);
  const showModal = () => {
    modalRef.current?.showModal();
  };
  const loadData = () => {
    console.log('loaded');

    load('accountList').then(data => {
      const accountList = JSON.parse(data);

      const gameList: DataType[] =
        accountList.filter((item: DataType) => item.type === 'game') || [];
      const platformList: DataType[] =
        accountList.filter((item: DataType) => item.type === 'platform') || [];
      const bankList: DataType[] =
        accountList.filter((item: DataType) => item.type === 'bank') || [];
      const otherList: DataType[] =
        accountList.filter((item: DataType) => item.type === 'other') || [];

      const _sectionData: ContentProps[] = [
        {type: 'game', data: gameList},
        {type: 'platform', data: platformList},
        {type: 'bank', data: bankList},
        {type: 'other', data: otherList},
      ];

      LayoutAnimation.easeInEaseOut();
      setSectionData(_sectionData);
    });
  };

  return (
    <View style={styles.root}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="#30303060"
      />
      <Header />
      <Body>
        {sectionData.map((item, index) => (
          <Content
            type={item.type}
            data={item.data}
            key={index}
            modalRef={modalRef}
            loadData={loadData}
          />
        ))}
      </Body>
      <TouchableOpacity onPress={showModal}>
        <Image source={icon_add} style={styles.add} />
      </TouchableOpacity>
      <Modal ref={modalRef} loadData={loadData} />
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
