export interface IEmployee{
    id:number,
    name:string,
    gender:string
}

export interface IPermanentEmployee extends IEmployee
{
    yearlyPackage:number
}