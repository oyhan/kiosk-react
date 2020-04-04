import { IResource } from "./getResource";


export const en_US: IResource = {

    MainMenu: {
        TakeReserve: "Take reserve",
        ConfirmReserve: "Confirm reserve",
        PrintReserve: "Print reserve",
        TrackReserve: "Track reserve",
        DoctorSchedules: "Doctor schedules",
        ChangeLanguge: "Change language",
        Title: "Main menu",


    },
    Required: "This field is required",
    NationalCode: {
        EnterValidNationalCode: "Please enter a valid national code",
        Title: "NationalCode"

    },
    Confirm: "Confirm",
    ConfirmReserve: {
        Success: "Your reserve has successfully confirmed",
        PleaseEnterYourNationalCode: 'Please enter your national code',
        Title: "Confirm Reserve"

    },
    Warning: "Warning",
    Ok: "OK",
    MobileNumber :"Mobile number",
    EnterValidMobileNumber :"Please enter a valid mobile number",
    Reserve: {
        Title: "Reserve",
        TodayReserve: "Today",
        OtherDaysReserve: "Other days",
        Remained : "Remained",

        ReserveState: {
            AlreadyCanceled: "Your reserve has already ",
            CapacityFull: "Sorry the capacity has just ran out!",
            ChangedPendingReserve: "",
            Confirmed: "Reserve confirmed successfully",
            DeadlineExpired: "Confirm deadline time expired.",
            DoctorIsAbsent: "Doctor is absent in this day",
            DoctorIsNotInCycle: "Doctor is not visiting in this week",
            Failed: "Sorry reserve operation faild",
            InvalidDate: "Invalid reserve date",
            NoMatchSchedule: "No match schedule found",
            NoMatchWeekDay: "",
            OutOfDoctorScheduleDate: "",
            OutOfWorktime: "Out of clinic work time.",
            PendingForPayment: "Pending for payment",
            PendingForReserve: "",
            PendingForWaitingList: "PendingForWaitingList",
            SuccessForWaitingList: "SuccessForWaitingList",
            TurnLimitReached: "Sorry you can not reserve anymore.",
            WaitingListCapacityFull: "WaitingListCapacityFull",
            SuccessForReserve : "Succussfull reserve !",
            TemporaryReserved : "Temporary Reserved",
            EndOfDoctorSchedule : "End of doctor schedule time",


        }
    }


}