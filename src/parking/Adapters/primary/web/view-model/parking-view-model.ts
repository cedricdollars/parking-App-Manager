import {ParkingParams} from "../../../../domain/entities/parkingDTO";
import {Vehicle} from "../../../../domain/entities";

export interface IParkingVM {
    no_place: number
    isFree: boolean
    vehicle?: Vehicle
}

export class ParkingVM implements IParkingVM {
    isFree: boolean;
    no_place: number;
    vehicle?: Vehicle

    constructor(params: ParkingParams) {
        this.no_place = params.no_place
        this.isFree = params.isFree
        this.vehicle = params.vehicle
    }

}
