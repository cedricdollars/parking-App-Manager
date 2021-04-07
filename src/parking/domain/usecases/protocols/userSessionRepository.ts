import {UserDTO} from "../../entities/userDTO";

export interface UserSessionRepository {
    register(userDto: UserDTO):Promise<void>
    login(username:string, password: string):Promise<string>
}

