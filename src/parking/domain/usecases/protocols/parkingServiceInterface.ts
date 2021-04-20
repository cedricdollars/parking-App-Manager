import {ParkingParams} from "../../entities/parkingDTO";

export interface ParkingServiceInterface {
   // parkVehicleInOnePlace():Promise<boolean>
    getParkingPlaces():Promise<Array<ParkingParams>>
}