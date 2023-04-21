import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {ModalContext} from '../contexts/ModalContext';
import icon_close from '../assets/icon_close_modal.png';

export const Header = (): JSX.Element => {
  const {closeModal} = useContext(ModalContext);
  const styles = StyleSheet.create({
    root: {
      height: 30,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon_close_wrapper: {
      position: 'absolute',
      right: 2,
    },
    icon_close: {
      width: 28,
      height: 28,
    },
  });
  return (
    <View style={styles.root}>
      <Text>添加账号</Text>
      <TouchableOpacity onPress={closeModal} style={styles.icon_close_wrapper}>
        <Image source={icon_close} style={styles.icon_close} />
      </TouchableOpacity>
    </View>
  );
};

export type SelectionType = 'game' | 'platform' | 'bank' | 'other';
export type SelectionProps = {
  type: SelectionType;
  onSelect: (type: SelectionType) => void;
};
export const Selection: React.FC<SelectionProps> = (props): JSX.Element => {
  const {type, onSelect} = props;
  const styles = StyleSheet.create({
    root: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    title: {
      width: '100%',
      textAlign: 'left',
    },
    wrapper: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 4,
    },
    bar: {
      height: 20,
      flex: 1,
    },
    text: {
      textAlign: 'center',
    },
    rightBorder: {
      borderRightWidth: 1,
      borderRightColor: 'black',
    },
    highlightedBar: {
      backgroundColor: 'blue',
    },
  });
  const arr = [
    {
      index: 0,
      text: 'game',
    },
    {index: 1, text: 'platform'},
    {index: 2, text: 'bank'},
    {index: 3, text: 'other'},
  ];

  const renderOption = () => {
    return arr.map((obj, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={[
            styles.bar,
            index === arr.length - 1 ? null : styles.rightBorder,
            type === obj.text ? styles.highlightedBar : null,
          ]}
          onPress={() => {
            onSelect(obj.text);
          }}>
          <Text style={styles.text}>{obj.text}</Text>
        </TouchableOpacity>
      );
    });
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>setType</Text>
      <View style={styles.wrapper}>{renderOption()}</View>
    </View>
  );
};

type InputTitleType = 'name' | 'acount' | 'password';
type InputProps = {
  title: InputTitleType;
  onChangeText: (title: InputTitleType, text: string) => void;
};
export const Input = (props: InputProps): JSX.Element => {
  const {title, onChangeText} = props;
  const styles = StyleSheet.create({
    root: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginBottom: 10,
    },
    title: {
      width: '100%',
      textAlign: 'left',
    },
    input: {
      backgroundColor: '#00000030',
      width: '100%',
      height: 40,
      borderRadius: 6,
    },
  });
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          onChangeText(title, text);
        }}
      />
    </View>
  );
};

type ButtonProps = {
  onSubmit: () => void;
};
export const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const {onSubmit} = props;
  const styles = StyleSheet.create({
    root: {
      height: 40,
      width: '100%',
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginTop: 10,
    },
    title: {
      width: '100%',
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 600,
      color: 'white',
    },
  });
  return (
    <TouchableOpacity style={styles.root} onPress={onSubmit}>
      <Text style={styles.title}>保存</Text>
    </TouchableOpacity>
  );
};
