import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {StyleSheet, Modal, View} from 'react-native';
import {Header, Selection, Input, Button} from './FormComponents';
import {save, load} from '../utils/Storage';
import {getUUID} from '../utils/UUID';

const App: React.ForwardRefExoticComponent<
  React.RefAttributes<ModalRefAttr> & ModalProps
> = forwardRef((props, ref): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isModify, setIdModify] = useState(false);
  const [id, setId] = useState('');
  const [type, setType] = useState<SelectionType>('game');
  const [name, setName] = useState<string>('');
  const [account, setAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {loadData} = props;

  useImperativeHandle(ref, () => {
    return {
      showModal,
      closeModal,
    };
  });

  const showModal = (type?: SelectionType, data?: DataType) => {
    setVisible(true);

    if (type && data) {
      setIdModify(true);
      setType(type);
      setId(data.id);
      setName(data.name);
      setAccount(data.account);
      setPassword(data.password);
      return;
    }
    setIdModify(false);
    setId(getUUID());
    setType('game');
    setName('');
    setAccount('');
    setPassword('');
  };
  const closeModal = () => {
    setVisible(false);
  };
  const onSelect = (text: SelectionType) => {
    setType(text);
  };
  const onSubmit = () => {
    const newAccount = {id, type, name, account, password};
    load('accountList').then(data => {
      let accountList: DataType[] = data ? JSON.parse(data) : [];

      // 如果是编辑现有账号，则push前先移除原来的
      if (isModify) {
        accountList = accountList.filter(item => item.id !== id);
      }

      accountList.push(newAccount);
      save('accountList', JSON.stringify(accountList)).then(() => {
        closeModal();
      });
      closeModal();
      loadData();
    });
  };

  const titleMapState: TitleMapStateType = {
    name: setName,
    account: setAccount,
    password: setPassword,
  };
  const onChangeText = (title: InputTitleType, text: string) => {
    titleMapState[title](text);
  };
  return (
    <Modal
      visible={visible}
      transparent={true}
      statusBarTranslucent={true}
      animationType="fade"
      style={styles.root}>
      <View style={styles.wrapper}>
        <View style={styles.form}>
          <Header onClose={closeModal} />
          <Selection
            type={type}
            onSelect={(_type: SelectionType) => {
              onSelect(_type);
            }}
          />
          <Input title="name" onChangeText={onChangeText} value={name} />
          <Input title="account" onChangeText={onChangeText} value={account} />
          <Input
            title="password"
            onChangeText={onChangeText}
            value={password}
          />
          <Button onSubmit={onSubmit} />
        </View>
      </View>
    </Modal>
  );
});

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
