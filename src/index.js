import React from 'react';
import { createRoot } from "react-dom/client"
import { StrictMode } from "react";
import { BrowserRouter  } from 'react-router-dom'; 

import App from './App';
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

