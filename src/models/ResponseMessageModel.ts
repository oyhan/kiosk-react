
export enum ResponseMessageStatusCode {
    NotFound = 0,
    Success = 1,
    Failed = 2,
    BadRequest = 3,
}


 export interface ResponseMessageModel<T> {

    Entity: T;
    StatusCode : ResponseMessageStatusCode;
    Message :string

}