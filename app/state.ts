import { atom } from "recoil";
interface UserDatatype  {
    avatar_url: string,
    blog:string,
    company:string,
    created_at:string,
    followers: number,
    following:number,
    public_repos:number,
    location:string,
    name:string,
    login:string,
    twitter_username:string,
    html_url:string
  }
export type {UserDatatype}


export const themState = atom({
  key: "theme",
  default: true,
});

export const userDataState =atom<UserDatatype | null>({
    key: 'userData',
    default: null
})
