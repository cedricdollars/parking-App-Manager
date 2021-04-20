import {ParkingVehicleRepository} from "./protocols/parkingVehicleRepository";
import {ParkingServiceInterface} from "./protocols/parkingServiceInterface";
import {ParkingParams} from "../entities/parkingDTO";


export class ParkingService implements ParkingServiceInterface{

    constructor(
        private repository: ParkingVehicleRepository,

    ) {}

    getParkingPlaces(): Promise<Array<ParkingParams>> {
         return this.repository.getParkingPlaces()

    }
}
