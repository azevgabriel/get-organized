import { ReactNode } from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ToastProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </ToastProvider>
  );
};

export default AppProvider;