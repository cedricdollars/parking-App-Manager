import {ParkingPlace, Vehicle} from "../../../../domain/entities";
import {ParkingParams} from "../../../../domain/entities/parkingDTO";

export interface Parking {
    parkingPlaces: ParkingPlace[]
}
export interface ParkingAction{
    type: string
    payload: any
}
export interface ParkingActions {
    getParkingPlaces(parkingEntity: Array<ParkingPlace>):ParkingAction
    parkVehicleToPlace(params: ParkingParams):ParkingAction
}