import { IUser } from "./user.interface";

export interface IAuthContext {
    user: IUser
    loading: boolean
    logout: () => void
}