import InterfaceInfrastructure from "../interfaces/interfaceInfrastructure";
import {HttpImpl} from "../../../../secondary/http/httpImpl";

const infrastructures = ():InterfaceInfrastructure => {
    return {
        http: new HttpImpl()
    }
}
export default infrastructures