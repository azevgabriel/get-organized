import { ReactNode } from 'react';
import { AuthProvider } from './auth';
import { ModalProvider } from './modal';
import { ToastProvider } from './toast';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ToastProvider>
      <ModalProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ModalProvider>
    </ToastProvider>
  );
};

export default AppProvider;