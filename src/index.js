import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Page1 from './pages/1';
import { RecoilRoot } from 'recoil';
import { ThemeContextProvider } from './context/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/1" element={<Page1 />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </RecoilRoot>
  </React.StrictMode>
);
