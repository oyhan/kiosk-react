import {RoleAccess} from "../../security/RoleAccess"
import UserModel from "../../models/UserModel";

export default function hasAccessTo(path : string, user : UserModel) {
    
    


    const { Roles  } = user;
    
    // if (Roles.includes(ROLES.ADMIN)) return true;


   
    for (const role of Roles) {
        if ((RoleAccess[role] ).some((r:string)=>r.toLowerCase() == path.toLowerCase())) {
            
            return true;
        }
    }
    
    return false;

}