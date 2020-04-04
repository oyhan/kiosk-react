import { SharedServiceModel } from "./SharedServiceModel";


export interface ServiceModel {

    Id: string,
    SharedService: SharedServiceModel,
    Order: number,
    Title : string,
}