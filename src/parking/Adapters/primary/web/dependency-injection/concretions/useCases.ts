import InterfaceUseCases from "../interfaces/interfaceUseCases";
import {ParkingService} from "../../../../../domain/usecases/parking_service";
import InterfaceRepository from "../interfaces/interfaceRepository";

const services =  (repository: InterfaceRepository):InterfaceUseCases => {
    return {
        parkingServices: new ParkingService(repository.parkingRepository)
    }
}
export default services