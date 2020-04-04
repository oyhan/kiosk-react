import { SettingModel } from "../models/SettingModel";
import SettingActions from "../actions/settingActions";
import { Reducer } from "react";
import { IAction } from "../models/IAction";

export interface SettingPayload {
    setting: SettingModel
}

export const settingReducer: Reducer<SettingModel, IAction<SettingActions, SettingPayload>> = (state: SettingModel, action: IAction<SettingActions, SettingPayload>) => {






    switch (action.type) {
        case SettingActions.UPDATE:
            return action.payload.setting;
     
        default:
            return state;
    }

}