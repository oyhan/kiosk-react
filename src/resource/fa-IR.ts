import { IResource } from "./getResource";


export const fa_IR :IResource = {

    MainMenu : {
        TakeReserve :"رزرو نوبت",
        ConfirmReserve : "تایید نوبت",
        PrintReserve :"چاپ نوبت",
        TrackReserve: "پیگیری نوبت",
        DoctorSchedules : "برنامه کاری پزشکان",
        ChangeLanguge : "تغییر زبان",
        Title : "صفحه اصلی",

    },
    Required : "مقدار این فیلد الزامی است",
    NationalCode :{
        EnterValidNationalCode:"لطفا یک کدملی معتبر وارد کنید",
        Title :"کدملی"
       
    },
    Confirm :"تایید",
    ConfirmReserve : {
        Success :"رزرو شما با موفقیت تایید شد.",
        PleaseEnterYourNationalCode :'لطفا کد ملی خود را وارد کنید',
        Title: "تایید نوبت"

    },
    Warning : "هشدار",
    Ok :"بسیار خوب" ,
    MobileNumber :"شماره همراه",
    EnterValidMobileNumber :"لطفا یک شماره همراه معتبر وارد کنید",
    Reserve  : {
        Title : "رزرو نوبت" ,
        TodayReserve :"نوبت امروز" ,
        OtherDaysReserve :"نوبت سایر روزها" ,
        Remained : "باقیمانده",
        ReserveState : {
            AlreadyCanceled: "رزرو قبلا کنسل شده است",
            CapacityFull: "متاسفانه ظرفیت به اتمام رسیده است",
            ChangedPendingReserve: "ChangedPendingReserve",
            Confirmed: "رزرو شما با موفقیت تایید شد",
            DeadlineExpired: "مهلت تایید نوبت به اتمام رسیده است",
            DoctorIsAbsent: "متاسفانه پزشک مورد نظر در این روز غایب است",
            DoctorIsNotInCycle: "پزشک مورد نظر در این هفته حضور ندارد",
            Failed: "عملیات ثبت نوبت با خطا روبرو شد",
            InvalidDate: "روز رزرو نامعتبر می باشد",
            NoMatchSchedule: "No match schedule found",
            NoMatchWeekDay: "",
            OutOfDoctorScheduleDate: "",
            OutOfWorktime: "خارج از ساعت کاری درمانگاه",
            PendingForPayment: "منتظر پرداخت ",
            PendingForReserve: "منتظر تایید نوبت",
            PendingForWaitingList: "PendingForمنWaitingList",
            SuccessForWaitingList: "SuccessForWaitingList",
            TurnLimitReached: "متاسفانه امکان رزرو نوبت بیش از این برای شما وجود ندارد",
            WaitingListCapacityFull: "WaitingListCapacityFull",
            SuccessForReserve : "رزرو با موفیت ثبت شد",
            TemporaryReserved : "رزرو موقت",
            EndOfDoctorSchedule : "خارج زمان کاری پزشک",

            

        }
    }

}