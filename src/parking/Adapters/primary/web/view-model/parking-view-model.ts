import {ParkingParams} from "../../../../domain/entities/parkingDTO";
import {Vehicle} from "../../../../domain/entities";

export interface IParkingVM {
    no_place: number
    occupied: boolean

}

export class ParkingVM implements IParkingVM {
    no_place: number;
    occupied: boolean

    constructor(params: ParkingParams) {
        this.no_place = params.no_place
        this.occupied = params.occupied

    }

}
