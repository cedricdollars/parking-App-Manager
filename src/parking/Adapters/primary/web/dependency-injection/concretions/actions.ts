import InterfaceActions from "../interfaces/interfaceActions";
import {ParkingActionsImpl} from "../../Redux/actions/parkingActions";

const actions = ():InterfaceActions => {
    return {
        parking: new ParkingActionsImpl()
    }
}
export default actions