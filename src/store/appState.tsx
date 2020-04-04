  import React, {createContext, useContext, useReducer, Reducer} from 'react';
import { UserService } from '../services/UserService';
import AppState from '../models/AppStateModel';
import { KioskDefaultSettings } from '../models/SettingModel';
import { IAction } from '../models/IAction';
import { UserAction } from '../actions/userActions';
import SettingActions from '../actions/settingActions';
import { IPayload } from '../models/IPayload';
import { Language } from '../actions/resourceActions';
import PageTitleActions from '../actions/pageTitleActions';
import PageTitleModel from '../models/PageTitleModel';

interface StateProviderProps {
  reducer : Reducer<AppState,IAction<UserAction|SettingActions|PageTitleActions,IPayload>> ;
  initialState : AppState;
  children : any
}

const defaultTitle : PageTitleModel= {
  Title : "رزرو نوبت"
} 

export const initialState :any  = {
  User :  UserService.isAuthenticated ? UserService.Get() : {IsAuthenticated : false , AccessToken : "" , Name : "" , Roles :[]} ,
  Settings  : KioskDefaultSettings,
  Resource : Language.DEFAULT,
  PageTitle :  defaultTitle,
  ReserveModel :  {},
  Stepper : 0
  // resource : DEFAULT
}

export const StateContext = createContext(initialState);
export const StateProvider = ({reducer , initialState , children } :StateProviderProps)  =>(
  <StateContext.Provider value={useReducer<Reducer<AppState,IAction<UserAction|SettingActions|PageTitleActions,IPayload>>>(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () : [AppState,any] => useContext(StateContext);



