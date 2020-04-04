import { ReserveModel } from "../models/Reserve/ReserveModel";
import { Reducer } from "react";
import { IAction } from "../models/IAction";
import { Actions } from "../actions/Actions";

export interface ReservePayload {
    reserve :ReserveModel
}

export const  reserveReducer : Reducer<ReserveModel,IAction<Actions,ReservePayload>> =  (state : ReserveModel , action :IAction<Actions,ReservePayload>) => {
    
    
    


    switch (action.type) {
        case Actions.UPDATERESERVE:
            return action.payload.reserve;
    
        default:
            return state;
    }

}