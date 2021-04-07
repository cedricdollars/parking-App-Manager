import {Vehicle} from "./vehicle/vehicle";


export interface ParkingParams {
    no_place: number
    isFree: boolean
    vehicle: Vehicle
}

export class ParkingDTO implements ParkingParams {
    no_place: number
    isFree: boolean
    vehicle: Vehicle

    constructor(
        params: ParkingParams
    ) {
        this.no_place = params.no_place
        this.isFree = params.isFree
        this.vehicle = params.vehicle
    }

}