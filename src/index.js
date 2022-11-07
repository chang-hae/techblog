import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { RecoilRoot } from 'recoil';
import { ThemeContextProvider } from './context/Theme';
import ScrollToTop from './components/scroll/ScrollToTop';
import Page1 from './pages/1';
import Page2 from "./pages/2";
import Page3 from "./pages/3";
import Page4 from "./pages/4";
import Page5 from "./pages/5";
import Page6 from "./pages/6";
import Page7 from './pages/7';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeContextProvider>
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/1" element={<Page1 />}></Route>
              <Route path="/2" element={<Page2 />}></Route>
              <Route path="/3" element={<Page3 />}></Route>
              <Route path="/4" element={<Page4 />}></Route>
              <Route path="/5" element={<Page5 />}></Route>
              <Route path="/6" element={<Page6 />}></Route>
              <Route path="/7" element={<Page7 />}></Route>
            </Routes>
          </ScrollToTop>
        </BrowserRouter>
      </ThemeContextProvider>
    </RecoilRoot>
  </React.StrictMode>
);
