import { ReactNode } from 'react';
import { AuthProvider } from './auth';
import { CardProvider } from './card';
import { ModalProvider } from './modal';
import { ToastProvider } from './toast';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ToastProvider>
      <ModalProvider>
        <CardProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </CardProvider>
      </ModalProvider>
    </ToastProvider>
  );
};

export default AppProvider;