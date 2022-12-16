import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from '../pages/Create';
import Main from '../pages/Main';
import Update from '../pages/Update';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:productId' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
