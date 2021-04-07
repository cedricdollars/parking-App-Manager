import InterfaceInsfrasctructure from "../interfaces/interfaceInfrastructure";
import InterfaceRepository from "../interfaces/interfaceRepository";
import {ParkingRepository} from "../../../../secondary/inMemory/parkingVehicleRepositoryImpl";

const repositories = (infrastructure: InterfaceInsfrasctructure): InterfaceRepository => {
    return {
        parkingRepository: new ParkingRepository(infrastructure.http)
    }
}
export default repositories