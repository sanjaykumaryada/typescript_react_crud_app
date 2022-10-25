export interface IUser{
    name:string,
    email:string,
    address:string
}
export interface IUsersList{
    id:number;
    user:IUser;
}