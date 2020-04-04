import { MainService } from "./MainService";
import UserModel from "../models/UserModel";
import {Urls} from  "../infrastructure/Helper/urls"

// import React from "react";
let user : UserModel = JSON.parse(localStorage.getItem('user') || '{"":""}');

export const UserService = {

     Get :function() {
        return user;
    },

    LogedIn: false,
    IsAuthenticated : async function(){
        var result = await MainService.Get(Urls.isAuthenticated) ;
        return result;
    } ,

    get  isAuthenticated() {
        // return true;
        var localUser = JSON.parse(localStorage.getItem('user') || '{"":""}');
        var today = new Date();
        var tokenExpireTime = new Date(localUser && localUser.ExpireDate );
        
       
        return localUser == null || localUser.isAuthenticated === undefined ? false : tokenExpireTime > today;
        
    },
    // get surname() { return user.lastName },
    // get username() { return user.Name },
    get token() { return user && user.AccessToken },
    // id() {
    //     return user.Id
    // },

    Logout: function()  {
        localStorage.removeItem('user')
        const logOffedUser : UserModel = {IsAuthenticated:false,AccessToken : "" ,Name : "" , Roles :[]};

        localStorage.setItem('user', JSON.stringify(logOffedUser))
        
        return logOffedUser;
    },
    // get role() {
    //     return user.role;
    // },
    
    singin: async function (user : UserModel) {
        
        user.IsAuthenticated = true;

        this.LogedIn = true;
        localStorage.setItem('user', JSON.stringify(user))
        var storedUser = localStorage.getItem('user');
        while (storedUser==undefined ||storedUser ===null ) {
            storedUser = localStorage.getItem('user');
        }

        return true;
    }
};


export const authentication = () => {
    // if (UserService.isAuthenticated) 
    {
        return {
            'Authorization': 'bearer ' + UserService.token
        }

    }
    return "";

}
