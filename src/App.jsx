import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import IncomePage from './pages/IncomePage.jsx';
import ExpensePage from './pages/ExpensePage.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/income" element={<IncomePage/>}></Route>
        <Route path="/expense" element={<ExpensePage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
