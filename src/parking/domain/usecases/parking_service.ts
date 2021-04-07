import {ParkingPlaceVehicleRepository} from "./protocols/parkingVehicleRepository";
import {ParkingServiceInterface} from "./protocols/parkingServiceInterface";
import {ParkingParams} from "../entities/parkingDTO";


export class ParkingService implements ParkingServiceInterface{

    constructor(
        private repository: ParkingPlaceVehicleRepository,

    ) {}

    async parkVehicleInOnePlace(params: ParkingParams):Promise<boolean> {
       let isParked = await this.repository.parkVehicleInOnePlace(params)
        return isParked
  }

    getParkingPlaces(): Promise<Array<ParkingParams>> {
         return this.repository.getParkingPlaces()

    }
}
