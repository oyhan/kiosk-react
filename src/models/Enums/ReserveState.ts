export enum ReserveState
{
    //[Display(Name = "منتظر تایید برای رزرو")]
    PendingForReserve=0,
    //[Display(Name = "منتظر تایید برای صف انتظار")]
    PendingForWaitingList=1,
    //[Display(Name = "قرار گرفته در صف انتظار")]
    SuccessForWaitingList=2,
    //[Display(Name = "رزرو شده")]
    SuccessForReserve=3,
//        Success,
    //[Display(Name = "خطا")]
    Failed=4,
    //[Display(Name = "عدم حضور پزشک")]
    DoctorIsAbsent=5,
    //[Display(Name = "ظرفیت تکمیل")]
    CapacityFull=6,
    //[Display(Name = "عدم حضور پزشک در این هفته")]
    DoctorIsNotInCycle=7,
    //[Display(Name = "ظرفیت صف انتظار تکمیل")]
    WaitingListCapacityFull=8,
    //[Display(Name = "برنامه کاری پزشک مناسب وجود ندارد")]
    NoMatchSchedule=9,
    //[Display(Name = "برای این روز هفته برنامه کاری پزشک تعریف نشده است")]
    NoMatchWeekDay=10,
    //[Display(Name = "رزرو موقت ثبت شده")]
    TemporaryReserved=11,
    //[Display(Name = "تاریخ انقضا نوبت گذشته است")]
    DeadlineExpired=12,
    //[Display(Name = "ساعت و شماره نوبت تغییر کرده است.")]
    ChangedPendingReserve=13,
    //[Display(Name = "شما بیش از این امکان  رزرو ندارید")]
    TurnLimitReached=14,
    //[Display(Name = "ساعت کاری پزشک تمام شده")]
    EndOfDoctorSchedule=15,
    //[Display(Name = "خارج از ساعت کاری سیستم")]
    OutOfWorktime=16,
    Confirmed=17,
    AlreadyCanceled=18,
    //خارج از تاریخ ساعت کاری
    OutOfDoctorScheduleDate=19,
    //منتظر پرداخت
    PendingForPayment=20,
    InvalidDate=21
}