
import { Reducer } from "react";
import { IAction } from "../models/IAction";
import { ResourceAction, Language } from "../actions/resourceActions";

export interface ResourcePayload {
    language :Language
}

export const  resourceReducer : Reducer<Language,IAction<ResourceAction,ResourcePayload>> =  (resource : Language , action :IAction<ResourceAction,ResourcePayload>) => {
    
    

    

    switch (action.type) {
        case ResourceAction.CHANGE:
            return action.payload.language;
    
        default:
            return resource;
    }

}