import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from '../pages/Create';
import LoginPage from '../pages/Login';
import Main from '../pages/Main';
import Update from '../pages/Update';
import SignUpPage from '../pages/Signup';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:productId' element={<Update />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
