import { ReserveState } from "../Enums/ReserveState";
import { Language } from "../../actions/resourceActions";
import getResource from "../../resource/getResource";


export const ReserveStatusCodeMessage = (state: ReserveState , language : Language) => {

    switch (state) {
        case ReserveState.PendingForReserve:
            return getResource(language).Reserve.ReserveState.PendingForReserve;
             
        case ReserveState.PendingForWaitingList:
            //[Display(Name = "منتظر تایید برای صف انتظار")]
            return getResource(language).Reserve.ReserveState.PendingForWaitingList;

             
        case ReserveState.SuccessForWaitingList:
            //[Display(Name = "قرار گرفته در صف انتظار")]
            return getResource(language).Reserve.ReserveState.SuccessForWaitingList;

             
        case ReserveState.SuccessForReserve:
            return getResource(language).Reserve.ReserveState.SuccessForReserve;


             
        case ReserveState.Failed:
            return getResource(language).Reserve.ReserveState.Failed;

             
        case ReserveState.DoctorIsAbsent:
            return getResource(language).Reserve.ReserveState.DoctorIsAbsent;

             
        case ReserveState.CapacityFull:
            return getResource(language).Reserve.ReserveState.CapacityFull;

             
       case ReserveState.DoctorIsNotInCycle:
        return getResource(language).Reserve.ReserveState.DoctorIsNotInCycle;

             
        case ReserveState.WaitingListCapacityFull:
            return getResource(language).Reserve.ReserveState.WaitingListCapacityFull;

             
        case ReserveState.NoMatchSchedule:
            return getResource(language).Reserve.ReserveState.NoMatchSchedule;

             
        case ReserveState.NoMatchWeekDay:
            return getResource(language).Reserve.ReserveState.NoMatchWeekDay;

             
        case ReserveState.TemporaryReserved:
            return getResource(language).Reserve.ReserveState.TemporaryReserved;

             
        case ReserveState.DeadlineExpired:
            return getResource(language).Reserve.ReserveState.DeadlineExpired;

             
        case ReserveState.ChangedPendingReserve:
            return getResource(language).Reserve.ReserveState.ChangedPendingReserve;

             
        case ReserveState.TurnLimitReached:
            return getResource(language).Reserve.ReserveState.TurnLimitReached;

             
        case ReserveState.EndOfDoctorSchedule:
            return getResource(language).Reserve.ReserveState.EndOfDoctorSchedule;

             
        case ReserveState.OutOfWorktime:
            return getResource(language).Reserve.ReserveState.OutOfWorktime;

             
        case ReserveState.Confirmed:
            return getResource(language).Reserve.ReserveState.Confirmed;

             
        case ReserveState.AlreadyCanceled:
            return getResource(language).Reserve.ReserveState.AlreadyCanceled;

             
        case ReserveState.OutOfDoctorScheduleDate:
            return getResource(language).Reserve.ReserveState.OutOfDoctorScheduleDate;

             
        case ReserveState.PendingForPayment:
            return getResource(language).Reserve.ReserveState.PendingForPayment;

             
        case ReserveState.InvalidDate:
            return getResource(language).Reserve.ReserveState.InvalidDate;

             
        default:
             
    }
}