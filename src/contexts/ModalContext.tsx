import {createContext} from 'react';

type contextType = {
  closeModal: () => void;
  submitModal: (data: any) => void;
};

export const ModalContext = createContext<contextType>({});
