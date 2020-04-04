import { Reducer } from "react";
import { IAction } from "../models/IAction";
import { Actions } from "../actions/Actions";



export const stepperReducer: Reducer<number, IAction<Actions, null>> = (step: number, action: IAction<Actions, null>) => {
    






    switch (action.type) {
        case Actions.NEXTSTEP:
           
            return ++step;

        case Actions.PREVSTEP:

            return --step;
        default:
            return step;
    }

}

