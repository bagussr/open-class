import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthService } from './utils/authService';
import { HelmetProvider } from 'react-helmet-async';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Kelas } from './pages/KelasSaya';
import { DetailKelas } from './pages/DetailKelas';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { KelasForum } from './pages/KelasForum';

export const App = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <AuthService>
              <Home />
            </AuthService>
          }
        />
        <Route
          exact
          path='/kelas/:id'
          element={
            <AuthService>
              <Kelas />
            </AuthService>
          }
        />
        <Route
          exact
          path='/kelas/forum/:id'
          element={
            <AuthService>
              <KelasForum />
            </AuthService>
          }
        />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/signup' element={<Register />} />
        <Route
          exact
          path='/kelas/detail/:id'
          element={
            <AuthService>
              <DetailKelas />
            </AuthService>
          }
        />
        <Route
          exact
          path='/profile/:id'
          element={
            <AuthService>
              <Profile />
            </AuthService>
          }
        />
        <Route
          exact
          path='/profile/:id/edit'
          element={
            <AuthService>
              <Profile edit={true} />
            </AuthService>
          }
        />
        <Route exact path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </HelmetProvider>
  );
};
