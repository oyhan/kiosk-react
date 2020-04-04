interface IJson {
    [key: string] : any
}
export const formObject = (target : HTMLFormElement) => {


    const formData : FormData = new FormData(target);
    
    var json :IJson = {};
   

    for (let entry  of formData.entries()) {


        if (entry[0].indexOf("List") != -1) {
            var list = (entry[1] as string).split(",");
            
            if (list.length == 1 && list[0]=="") {

                

                continue;
                

            }
            
            json[entry[0]] = list;
        }
        else
            json[entry[0]] = entry[1]
    }
    return json;
}

export const formExtractor = (target : HTMLFormElement) => {



    return JSON.stringify(formObject(target));
}

