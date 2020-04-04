import { authentication } from "./UserService";
import AppConfiguration from "../app.config";
import { ResponseMessageModel, ResponseMessageStatusCode } from "../models/ResponseMessageModel";


var URL = AppConfiguration.Server.Socket();

export const MainService = {

    Post,
    Get,

}


async function Post<T>(url: string, model: any): Promise<ResponseMessageModel<T>> {
    const request: RequestInit = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            ...authentication()
        },
        body: JSON.stringify(model)
    }

    try {
        const response = await fetch(url, request);

        return handleResponse<T>(response);
    }
    catch (error) {
        return handleError(error);
    }

}

async function Get<T>(url: string): Promise<ResponseMessageModel<T>> {
    const request = {
        method: "GET",
        headers: {
            ...authentication(),
            'Content-Type': 'application/json'
        },
    }

    try {
        const response = await fetch(url, request);

        return handleResponse<T>(response);
    }
    catch (error) {
        return handleError(error);
    }
}

function handleResponse<T>(response: Response): Promise<ResponseMessageModel<T>> {


    return new Promise<ResponseMessageModel<T>>((resolve, reject): any => {
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {

                try {

                    response.json().then((json: any) => {

                        const result = json as ResponseMessageModel<T>;
                       
                        resolve(result);
                    });

                } catch (error) {

                }
            } else {

                resolve();
            }
        } else {

            // return error message from response body
            response.text().then((text: string) => {


                try {
                    var json = JSON.parse(text);
                    var errorMessage = "";
                    for (var prop in json)
                        errorMessage += json[prop];
                    reject(errorMessage);
                } catch (e) {
                    reject(text);

                }
            });
        }
    });
}

function handleError(error: any) {



    return Promise.reject(error && error.message);
}