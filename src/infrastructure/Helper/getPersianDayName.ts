

export function getPersianDayName(weekDay: number) {


    switch (weekDay) {
        case 0:
            return "شنبه";
        case 1:
            return "یک‌شنبه";
        case 2:
            return "دوشنبه";
        case 3:
            return "سه‌شنبه";
        case 4:
            return "چهارشنبه";
        case 5:
            return "پنج‌شنبه";
        case 6:
            return "جمعه";

        default:
            break;
    }
}