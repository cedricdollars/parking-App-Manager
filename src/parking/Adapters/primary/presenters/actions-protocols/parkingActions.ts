import {ParkingPlace} from "../../../../domain/entities";


export interface Parking {
    parkingPlaces: ParkingPlace[]
}
export interface ParkingAction{
    type: string
    payload?: any
}
export interface ParkingActions {
    getParkingPlaces(parkingEntity: Array<ParkingPlace>):ParkingAction
    parkVehicleToPlace(id:number):ParkingAction
}