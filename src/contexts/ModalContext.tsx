import {createContext} from 'react';

type contextType = {
  closeModal: () => void;
  showModal: (data: any) => void;
};

export const ModalContext = createContext<contextType>({});
