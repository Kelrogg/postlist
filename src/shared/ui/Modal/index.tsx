import styles from './styles.module.scss'
import { createContext, useContext, useState, type FC } from 'react';
import { ModalHeader, type ModalHeaderProps } from './components/Header';
import { ModalBody, type ModalBodyProps } from './components/Body';
import { ModalFooter, type ModalFooterProps } from './components/Footer';
import { ModalTrigger, type ModalTriggerProps } from './components/Trigger';
import { ModalTitle, type ModalTitleProps } from './components/Title';
import { ModalContent, type ModalContentProps } from './components/Content';

interface ModalContextProps {
  open: boolean;
  toggle: () => void;
}

const ModalContext = createContext<ModalContextProps>({open: false, toggle: () => {}});

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be used within Modal');
  }
  return context;
};

interface SubComponentProps {
  children?: React.ReactNode;
}

interface ModalCompoundComponentProps extends FC<SubComponentProps> {
  Trigger: FC<ModalTriggerProps>;
  Title: FC<ModalTitleProps>;
  Content: FC<ModalContentProps>;
  Header: FC<ModalHeaderProps>;
  Body: FC<ModalBodyProps>;
  Footer: FC<ModalFooterProps>;
}

export const Modal: ModalCompoundComponentProps = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(prev => !prev);

  return (
    <ModalContext.Provider value={{ open, toggle }}>
      {children}
    </ModalContext.Provider>
  )
}; 

Modal.Trigger = ModalTrigger
Modal.Content = ModalContent
Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.Title = ModalTitle