import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../contexts/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransictions = useTransition( messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
    delay: 200,
  });

  return (
    <Container>
      {messagesWithTransictions((props, item) => (
        <Toast 
          key={item.id} 
          style={props} 
          message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;