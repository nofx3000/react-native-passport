import React, {useState} from 'react';
import {StyleSheet, Text, Modal, View} from 'react-native';
import {
  Header,
  Selection,
  Input,
  Button,
  SelectionType,
  InputTitleType,
} from './FormComponents';

type ModalProps = {
  visible: boolean;
};
const App: React.FC<ModalProps> = (props): JSX.Element => {
  const [type, setType] = useState<SelectionType>('game');
  const [name, setName] = useState<string>('');
  const [acount, setAcount] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onSelect = (text: SelectionType) => {
    setType(text);
  };
  const onSubmit = () => {
    console.log({type, name, acount, password});
  };
  const titleMapState = {
    name: setName,
    acount: setAcount,
    password: setPassword,
  };
  const onChangeText = (title: InputTitleType, text: string) => {
    titleMapState[title](text);
  };
  const {visible} = props;
  return (
    <Modal
      visible={visible}
      transparent={true}
      statusBarTranslucent={true}
      animationType="fade"
      style={styles.root}>
      <View style={styles.wrapper}>
        <View style={styles.form}>
          <Header />
          <Selection
            type={type}
            onSelect={(_type: SelectionType) => {
              onSelect(_type);
            }}
          />
          <Input title="name" onChangeText={onChangeText} />
          <Input title="acount" onChangeText={onChangeText} />
          <Input title="password" onChangeText={onChangeText} />
          <Button onSubmit={onSubmit} />
        </View>
      </View>
    </Modal>
  );
};

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
