import { PlayReserveDay } from "../../models/Enums/PlayReserveDay";
import { ReserveModel } from "../../models/Reserve/ReserveModel";

export const Urls = {

    Call: function (endPoint: string) {
        return process.env.REACT_APP_API + endPoint;
    },
    Specialty: {
        GetByShift: function (shiftId: string, playDay: PlayReserveDay, spCategoryId?: string) {
            return `${process.env.REACT_APP_API}/v2/tel/GetSpecialties?clinicId=${process.env.REACT_APP_CLIENTID}&shiftId=${shiftId}&reserveDay=${playDay}&specialtyCategoryId=${spCategoryId ?? ""}`
        },
        GetServices: function (specialtyId: string) {
            return `${process.env.REACT_APP_API}/api/SharedSpecialty/GetServices?clinicId=${process.env.REACT_APP_CLIENTID}&id=${specialtyId}`
        },

        GetDoctors: function (serId: string, spId: string, reserveDay: PlayReserveDay, shiftId: string) {
            return `${process.env.REACT_APP_API}/api/Doctor/Get?clinicId=${process.env.REACT_APP_CLIENTID}&spId=${spId}&serId=${serId}&shiftId=${shiftId}&reserveDay=${reserveDay}&lastModifiedDate=`
        
        }
    },
    Reserve : {
        Print : function (reserveId : string){
            return `${process.env.REACT_APP_API}/api/reserve/PrintStart?reserveId=${reserveId}`;
        },
        GetList : function(doctorId:string , serId :string , spId  :string ,shiftId:string) {
            return `${process.env.REACT_APP_API}/api/reserve/getList?clinicId=${process.env.REACT_APP_CLIENTID}&spId=${spId}&serId=${serId}&reserveType=2&doctorId=${doctorId}&shiftId=${shiftId}`

        },

        New : `${process.env.REACT_APP_API}/api/reserve/newReserve`
    },
    Settings: {
        Get: `/api/Setting/GetKioskSettings?clinicId=${process.env.REACT_APP_CLIENTID}`
    },
    Shift: {
        Get: `/api/shift/GetWithResponse?clinicId=${process.env.REACT_APP_CLIENTID}`
    },
    ConfirmReserve: "/api/reserve/confirmByNationalCode?nationalCode=",
    isAuthenticated: "/api/account/IsAuthenticated",
    GoogleLogin: "api/account/glogin",
    Personnel: {
        GetAll: "/api/personnel/getpersonnel",
        GetRoles: "/api/personnel/getroles",
        Edit: "/api/personnel/edit"
    },
    Segment: {
        Get: "/api/segment/get/",
        GetAll: "/api/segment/getall",
        Delete: "/api/segment/delete",
        New: "/api/segment/new",
        GetModel: "/api/segment/getmodel",
        Batch: "/api/segment/bdelete",
        Edit: "/api/segment/edit",
        GetEditModel: "/api/segment/getmodel?modeltype=edit"
    },
    ConsoleLog: {
        Get: "/api/ConsoleLog/get?id=",
        GetAll: "/api/log/getall",
        Delete: "/api/log/delete",
        New: "/api/log/new",
        GetModel: "/api/log/getmodel",
        Batch: "/api/log/bdelete",
        Edit: "/api/log/edit"
    },
    IssueType: {
        Get: "/api/IssueType/get/",
        GetAll: "/api/IssueType/getall",
        Delete: "/api/IssueType/delete",
        New: "/api/IssueType/new",
        GetModel: "/api/IssueType/getmodel",
        Batch: "/api/IssueType/bdelete",
        Edit: "/api/IssueType/edit"
    },
    Issue: {
        GetByTypeId: "/api/issue/GetByIssueTypeId/",
        Get: "/api/issue/get?id=",
        GetAll: "/api/issue/getall",
        Delete: "/api/issue/delete",
        New: "/api/issue/new",
        GetModel: "/api/issue/getmodel",
        Batch: "/api/issue/bdelete",
        Edit: "/api/issue/edit"
    },
    Content: {
        Upload: "/api/content/upload",
        GetAll: "/api/customer/getall",
        Delete: "/api/customer/delete",
        New: "/api/customer/new",
        GetModel: "/api/customer/getmodel",
        Batch: "/api/customer/bdelete",
        Edit: "/api/customer/edit",
        Clients: "/api/customer/getclients/"
    },
    CustomerOrderItem: {
        Get: "/api/customerOrderItem/get?id=",
        GetAll: "/api/customerOrderItem/getall",
        Delete: "/api/customerOrderItem/delete",
        New: "/api/customerOrderItem/new",
        GetModel: "/api/customerOrderItem/getmodel",
        Batch: "/api/customerOrderItem/bdelete",
        Edit: "/api/customerOrderItem/edit"
    },
    CustomerOrder: {
        Get: "/api/customerOrder/get?id=",
        GetAll: "/api/customerOrder/getall",
        Delete: "/api/customerOrder/delete",
        New: "/api/customerOrder/new",
        GetModel: "/api/customerOrder/getmodel",
        Batch: "/api/customerOrder/bdelete",
        Edit: "/api/customerOrder/edit"
    },
    Product: {
        Get: "/api/product/get?id=",
        GetAll: "/api/product/getall",
        Delete: "/api/product/delete",
        New: "/api/product/new",
        GetModel: "/api/product/getmodel",
        Batch: "/api/product/bdelete",
        Edit: "/api/product/edit"
    },
}