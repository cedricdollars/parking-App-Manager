import InterfaceActions from "../interfaces/interfaceActions";
import InterfaceUseCases from "../interfaces/interfaceUseCases";
import ParkingPresenter from "../../../presenters/parking";

const presenters = (services: InterfaceUseCases, actions: InterfaceActions) => {
    return {
        parking: new ParkingPresenter(services.parkingServices,actions.parking)
    }
}
export default presenters