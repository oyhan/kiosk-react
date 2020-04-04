import * as Yup from 'yup';
import { isValidNationalCode, isValidMobileNumber } from '../../infrastructure/Helper/validators';


 Yup.addMethod<Yup.StringSchema<string>>(Yup.string, "nationalCode", function (message: string) {

    return this.test("isValidNationalCode", message, function (value: string) {
        const { path, createError } = this;
        return isValidNationalCode(value);
    });
});
Yup.addMethod<Yup.StringSchema<string>>(Yup.string, "mobileNumber", function (message: string) {

    return this.test("isValidMobileNumber", message, function (value: string) {
        const { path, createError } = this;
        return isValidMobileNumber(value);
    });
});
