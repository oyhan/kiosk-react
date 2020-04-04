import { userReducer } from "./userReducer";
import AppState from "../models/AppStateModel";
import { settingReducer } from "./settingReducer";
import { Reducer } from "react";
import { IAction } from "../models/IAction";
import { UserAction } from "../actions/userActions";
import SettingActions from "../actions/settingActions";
import { IPayload } from "../models/IPayload";
import { resourceReducer } from "./resourceReducer";
import { ResourceAction } from "../actions/resourceActions";
import { pageTitleReducer } from "./titleReducer";
import PageTitleActions from "../actions/pageTitleActions";
import { reserveReducer } from "./reserveReducer";
import { stepperReducer } from "./stepperReducer";




const mainReducer :Reducer<AppState,IAction<UserAction|SettingActions|PageTitleActions|ResourceAction,IPayload>> = ({ User , Settings,Resource,PageTitle  ,ReserveModel , Stepper } : AppState, action : any) : AppState => {

    // middleware goes here, i.e calling analytics service, etc.
    const state : AppState=  {
      User: userReducer(User, action),
      Settings : settingReducer(Settings,action) ,
      Resource :resourceReducer(Resource,action),
      PageTitle : pageTitleReducer(PageTitle,action),
      ReserveModel : reserveReducer(ReserveModel,action),
      Stepper  : stepperReducer(Stepper,action)
    };
    
    return state;
    
  };

  export default mainReducer;