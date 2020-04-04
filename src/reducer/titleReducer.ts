import PageTitleActions from "../actions/pageTitleActions";
import { Reducer } from "react";
import { IAction } from "../models/IAction";
import AppState from "../models/AppStateModel";
import PageTitleModel from "../models/PageTitleModel";

export interface PageTitlePayload {
    pageTitle: PageTitleModel
}

export const pageTitleReducer: Reducer<PageTitleModel, IAction<PageTitleActions, PageTitlePayload>> = (state: PageTitleModel, action: IAction<PageTitleActions, PageTitlePayload>) => {





    switch (action.type) {
        case PageTitleActions.UPDATE:
            
            return action.payload.pageTitle;
        default:
            return state;
    }

}