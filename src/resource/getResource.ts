import { Language } from "../actions/resourceActions";
import { fa_IR } from "./fa-IR";
import { en_US } from "./en-US";



export interface IResource {
    MainMenu : {
        TakeReserve :string ,
        PrintReserve : string,
        ConfirmReserve :string,
        TrackReserve :string,
        DoctorSchedules :string,
        ChangeLanguge : string,
        Title :string
    } ;
    Required :string;
    NationalCode:{
        Title: string,
        EnterValidNationalCode:string,
       
    };
    Confirm :string;
    ConfirmReserve  : {
        Success : string,
        PleaseEnterYourNationalCode :string,
        Title : string

    },
    Warning : string,
    Ok :string ,
    MobileNumber :string,
    EnterValidMobileNumber :string,
    Reserve  : {
        Title : string ,
        TodayReserve :string ,
        OtherDaysReserve :string ,
        Remained : string,
        ReserveState : {
            PendingForReserve :string,
            PendingForWaitingList :string,
            SuccessForWaitingList :string,
            Failed :string,
            DoctorIsAbsent :string,
            CapacityFull :string,
            DoctorIsNotInCycle :string,
            WaitingListCapacityFull :string,
            NoMatchSchedule :string,
            NoMatchWeekDay :string,
            DeadlineExpired :string,
            ChangedPendingReserve :string,
            TurnLimitReached :string,
            OutOfWorktime :string,
            Confirmed :string,
            AlreadyCanceled :string,
            OutOfDoctorScheduleDate :string,
            PendingForPayment :string,
            InvalidDate :string,
            SuccessForReserve : string,
            TemporaryReserved :string,
            EndOfDoctorSchedule :string
           

        }
    }
}

export default function getResource(language: Language) :IResource {
    
    

    switch (language) {
        case Language.DEFAULT:
            return fa_IR;

        case Language.EN:
            return en_US;
        default:
            return fa_IR;

    }

}