import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StateProvider, initialState } from './store/appState';
import mainReducer from './reducer';
import MainMenu from './views/MainMenu/MainMenu';
import RTL from './infrastructure/RTL';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ConfirmReserve } from './views/ConfirmReserve/Confirm';
import AppDialog from './components/Dialog/AppDialog';
import { ReadSettings } from './components/AppControl/ReadSettings';
import { RestartApp } from './components/AppControl/RestartApp';
import { Layout } from './views/Layout/Layout';

const hist = createBrowserHistory();


const App: React.FC = () => {

  return (
    <RTL>
      <StateProvider initialState={initialState} reducer={mainReducer} >

        <Router history={hist} >
          {process.env.NODE_ENV == 'production' ? <RestartApp /> : ""}
          <ReadSettings />
          <AppDialog />
          <Layout />


          {/* <ReadSettings /> */}


        </Router>

      </StateProvider>

    </RTL>
  );
}
export default App;
