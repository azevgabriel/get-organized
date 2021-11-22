import { useAuth } from '../hooks/auth';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export const Routes = () => {

  const { token } = useAuth();

  if (token) {
    return <AppRoutes />
  }

  return <AuthRoutes />;
  
};
