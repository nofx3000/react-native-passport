import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';

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
      <Text style={styles.title}>添加账号</Text>
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
      //   justifyContent: 'center',
      //   alignItems: 'center',
    },
  });
  return <ScrollView style={styles.root}>{children}</ScrollView>;
};

type ContentProps = {
  type: 'game' | 'platform' | 'bank';
  data: DataType[];
};

type DataType = {
  name: string;
  acount: string;
  password: string;
};

export const Content = (props: ContentProps): JSX.Element => {
  const {type, data} = props;
  const styles = StyleSheet.create({
    root: {
      height: 30,
      width: '100%',
      backgroundColor: 'red',
    },
  });
  return <ScrollView style={styles.root}>{children}</ScrollView>;
};
