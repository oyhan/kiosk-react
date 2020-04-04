import { ShiftModel } from "./ShiftModel";

export interface SettingModel {

    DateTimeNow: Date;
    DateTimeNowString: string;
    ButtonReserveVisibility: boolean;
    ButtonGetDaySchedulesVisibility: boolean;
    ButtonTodayReserveVisibility: boolean;
    IsMobileNumberRequired: boolean;
    IsNationalCodeRequired: boolean;
    Specialtys: string;
    Doctors: string;
    Shifts : ShiftModel[];

}

export const  KioskDefaultSettings :SettingModel = {
    ButtonGetDaySchedulesVisibility : true ,
    ButtonReserveVisibility : true ,
    ButtonTodayReserveVisibility : true, 
    DateTimeNow : new Date() ,
    DateTimeNowString : Date.toString(), 
    Doctors : ""  ,
    IsMobileNumberRequired : true ,
    IsNationalCodeRequired : true, 
    Specialtys  : "",
    Shifts : [],
    

}