import UserModel from "../models/UserModel";
import { UserService } from "../services/UserService";
import AppState from "../models/AppStateModel";
import { UserAction } from "../actions/userActions";
import { IAction } from "../models/IAction";
import { IPayload } from "../models/IPayload";

interface UserPayload extends IPayload {

    user: UserModel;
    isAuthenticated: boolean;
}

export const userReducer: React.Reducer<UserModel, IAction<UserAction, UserPayload>> = (state: UserModel, action: IAction<UserAction, UserPayload>) => {



    var user: UserModel;
    switch (action.type) {
        case UserAction.LOGIN:
            user = action.payload.user;
            UserService.singin(user);
            return { user, ...state };


        case UserAction.LOGOFF:

            user = UserService.Logout();
            return { user, ...state };

        case UserAction.ISAUTHENTICATED:

            user = UserService.Get();
            user.IsAuthenticated = action.payload.isAuthenticated;
            return { user, ...state };
        default:
            return state;
            break;
    }

}