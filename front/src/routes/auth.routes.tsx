import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";

import { Login } from "../pages/Login";

export const AuthRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
}