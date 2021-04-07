import {ParkingParams} from "../../entities/parkingDTO";

export interface ParkingPlaceVehicleRepository {
    parkVehicleInOnePlace(params: ParkingParams):Promise<boolean>
    getParkingPlaces():Promise<ParkingParams[]>

}
