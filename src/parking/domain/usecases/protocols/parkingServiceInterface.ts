import {ParkingParams} from "../../entities/parkingDTO";

export interface ParkingServiceInterface {
    parkVehicleInOnePlace(params: ParkingParams):Promise<boolean>
    getParkingPlaces():Promise<Array<ParkingParams>>
}