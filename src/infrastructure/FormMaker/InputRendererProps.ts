export enum PropType {



    Text = 1,
    CheckBox,
    Radio,
    Swith,
    TextArea,
    RichText,
    Password,
    Select,
    Hidden,
    Guid,
    DateTime,
    Number,
    Enum


}

export interface InputRendererProps {

    Name: string;
    Type: PropType;
    Required? :boolean ;
    DisplayName? :string;
    DefaultValue? :any ;
    DataSource? :{text:string,value:string}[];
    Disabled? : boolean;
    multiple? :boolean;
    Hint? :string;
    [k: string]: any
    Controled? :boolean;
    value? :string
}


