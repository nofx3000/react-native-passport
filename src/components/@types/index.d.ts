type ContentProps = {
  type: 'game' | 'platform' | 'bank' | 'other';
  data: DataType[];
  modalRef?: React.MutableRefObject<ModalRefAttr | null>;
  loadData?: () => void;
};

type DataType = {
  id: string;
  type: SelectionType;
  name: string;
  account: string;
  password: string;
};

type SelectionType = 'game' | 'platform' | 'bank' | 'other';

type SelectionProps = {
  type: SelectionType;
  onSelect: (type: SelectionType) => void;
};

type InputTitleType = 'name' | 'account' | 'password';

type InputProps = {
  title: InputTitleType;
  onChangeText: (title: InputTitleType, text: string) => void;
  value: string;
};

type HeaderProps = {
  onClose: () => void;
};

type ModalRefAttr = {
  showModal: (type?: SelectionType, data?: any) => void;
  closeModal: () => void;
};

type ButtonProps = {
  onSubmit: () => void;
};

type ModalProps = {
  loadData: () => void;
};

type TitleMapStateType = {
  [P in InputTitleType]: React.Dispatch<React.SetStateAction<any>>;
};
