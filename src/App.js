import logo from './logo.svg';
import './App.css';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './RoutesComponent';

import setupAxios from './utils/axios';
import { useEffect } from 'react';

const history = createMemoryHistory();

setupAxios();

function App() {
  useEffect(() =>{
    sessionStorage.setItem("loginSuccess", true);
  },[]);
  return (
    <BrowserRouter>
      <RoutesComponent />
      </BrowserRouter>
  );
}

export default App;
