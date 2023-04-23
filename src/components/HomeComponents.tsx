import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
  Image,
  LayoutAnimation,
  Alert,
} from 'react-native';
import {load, save} from '../utils/Storage';
import icon_game from '../assets/icon_game.png';
import icon_arrow from '../assets/icon_arrow.png';

export const Header = (): JSX.Element => {
  const styles = StyleSheet.create({
    root: {
      height: 30,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 16,
      fontWeight: 600,
      marginTop: 30,
    },
    title: {},
    switch: {
      position: 'absolute',
      right: 2,
    },
  });
  return (
    <View style={styles.root}>
      <Text style={styles.title}>账号本</Text>
      <Switch style={styles.switch} />
    </View>
  );
};

export const Body = ({children}): JSX.Element => {
  const styles = StyleSheet.create({
    root: {
      height: 30,
      width: '100%',
      backgroundColor: '#03030320',
      padding: 10,
      //   justifyContent: 'center',
      //   alignItems: 'center',
    },
  });
  return <ScrollView style={styles.root}>{children}</ScrollView>;
};

export const Content = (props: ContentProps): JSX.Element => {
  const {type, data, modalRef, loadData} = props;
  const [fold, setFold] = useState<boolean>(false);
  const toggleFold = () => {
    LayoutAnimation.easeInEaseOut();
    setFold(!fold);
  };
  const deleteAccount = (account: DataType) => {
    load('accountList').then(data => {
      let accountList = JSON.parse(data);
      accountList = accountList.filter(item => item.id !== account.id);
      save('accountList', JSON.stringify(accountList)).then(() => {
        loadData();
      });
    });
  };
  const styles = StyleSheet.create({
    root: {
      backgroundColor: 'white',
      borderRadius: 12,
      marginBottom: 10,
    },
    header: {
      flexDirection: 'row',
      padding: 15,
    },
    title: {
      fontSize: 20,
      fontWeight: 600,
      marginLeft: 10,
    },
    icon: {
      height: 30,
      width: 30,
    },
    arrow: {
      position: 'absolute',
      right: 10,
      top: 20,
    },
    content: {
      borderColor: 'gray',
      borderTopWidth: 0.5,
      padding: 15,
      backgroundColor: 'white',
    },
  });
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image source={icon_game} style={styles.icon} />
        <Text style={styles.title}>{type}</Text>
        <TouchableOpacity onPress={toggleFold} style={styles.arrow}>
          <Image
            source={icon_arrow}
            style={[
              {height: 20, width: 20},
              {
                transform: [
                  {
                    rotate: fold ? '-90deg' : '0deg',
                  },
                ],
              },
            ]}
          />
        </TouchableOpacity>
      </View>
      {!fold &&
        data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.content}
            onPress={() => {
              modalRef?.current?.showModal(type, item);
            }}
            onLongPress={() => {
              const buttons = [
                {text: '取消', onPress: () => {}},
                {text: '确定', onPress: () => deleteAccount(item)},
              ];
              Alert.alert('提示', `确定删除「${item.name}」账号吗？`, buttons);
            }}>
            <Text style={{fontSize: 16, fontWeight: 600}}>{item.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{flex: 1, textAlign: 'left'}}>
                账号：{item.account}
              </Text>
              <Text style={{flex: 1, textAlign: 'left'}}>
                密码：{item.password}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
    </View>
  );
};
