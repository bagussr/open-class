import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AuthService = ({ children }) => {
  const auth = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    auth.authoreized === true ? navigate('/') : navigate('/login');
  }, [auth]);

  return <>{children}</>;
};
