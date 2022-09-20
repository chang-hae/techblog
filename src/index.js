import React from 'react';
import styled from "styled-components";
import ReactDOM from 'react-dom/client';
import './index.css';
import Page1 from './pages/1';

const Wrapper = styled.div`
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper>
      <Page1 />
    </Wrapper>
  </React.StrictMode>
);
