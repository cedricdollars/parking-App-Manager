import {ParkingParams} from "../../entities/parkingDTO";

export interface ParkingVehicleRepository {
    //parkVehicleInOnePlace():Promise<boolean>
    getParkingPlaces():Promise<ParkingParams[]>

}
