import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { RecoilRoot } from 'recoil';
import { ThemeContextProvider } from './context/Theme';
import Page1 from './pages/1';
import Page2 from "./pages/2";
import Page3 from "./pages/3";
import Page4 from "./pages/4";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/1" element={<Page1 />}></Route>
            <Route path="/2" element={<Page2 />}></Route>
            <Route path="/3" element={<Page3 />}></Route>
            <Route path="/4" element={<Page4 />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </RecoilRoot>
  </React.StrictMode>
);
