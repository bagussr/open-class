import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../context/Auth/authSlicer';

export const AuthService = ({ children }) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookie = new Cookies();

  useEffect(() => {
    try {
      const token = cookie.get('key');
      if (token !== undefined) {
        dispatch(login(token));
      }
    } catch (err) {}
    auth.authoreized === true ? navigate('/') : navigate('/login');
  }, [auth]);

  return <>{children}</>;
};
