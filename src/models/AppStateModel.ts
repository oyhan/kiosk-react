import UserModel from "./UserModel";
import { SettingModel } from "./SettingModel";
import { Language } from "../actions/resourceActions";
import PageTitleModel from "./PageTitleModel";
import { ReserveModel } from "./Reserve/ReserveModel";

export default interface AppState  {

    User : UserModel ;
    Settings : SettingModel;
    Resource :Language,
    PageTitle : PageTitleModel,
    ReserveModel : ReserveModel,
    Stepper : number
}