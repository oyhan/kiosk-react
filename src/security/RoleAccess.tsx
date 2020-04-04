

 interface IRoleAccess  {
    Customer : string[];
    Personnel :  string[];
    Admin : string[];
    [key : string] : string [];
}


export const RoleAccess :IRoleAccess= {
   Customer : [
       "/issue/list",
       "/",

   ],
   Personnel  : [
    "/",
   ],
   Admin : [
       "/",
       "/admin",
       "/issue",
       "/issueType",
       "/dashboard",
       "/personnel",
       "/issueList",
       "/segment",
    //    "/logs",
       "/notifications"
       

   ],
   
  
}