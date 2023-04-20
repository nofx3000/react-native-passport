import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
  Image,
} from 'react-native';
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
      backgroundColor: 'red',
      padding: 10,
      //   justifyContent: 'center',
      //   alignItems: 'center',
    },
  });
  return <ScrollView style={styles.root}>{children}</ScrollView>;
};

export type ContentProps = {
  type: 'game' | 'platform' | 'bank';
  data: DataType[];
};

export type DataType = {
  id: string;
  name: string;
  acount: string;
  password: string;
};

export const Content = (props: ContentProps): JSX.Element => {
  const {type, data} = props;
  const styles = StyleSheet.create({
    root: {
      backgroundColor: 'white',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      marginBottom: 10,
    },
    header: {
      flexDirection: 'row',
      padding: 5,
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
      height: 20,
      width: 20,
      position: 'absolute',
      right: 5,
      top: 5,
    },
    content: {
      borderColor: 'gray',
      borderTopWidth: 0.5,
      padding: 5,
    },
  });
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image source={icon_game} style={styles.icon} />
        <Text style={styles.title}>{type}</Text>
        <Image source={icon_arrow} style={styles.arrow} />
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.content}>
          <Text>{item.id}</Text>
          <Text>{item.acount}</Text>
          <Text>{item.name}</Text>
          <Text>{item.password}</Text>
        </View>
      ))}
    </View>
  );
};
