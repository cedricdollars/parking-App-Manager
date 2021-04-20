
export interface ParkingParams {
    no_place: number
    occupied: boolean

}

export class ParkingDTO implements ParkingParams {
    no_place: number
    occupied: boolean


    constructor(
        params: ParkingParams
    ) {
        this.no_place = params.no_place
        this.occupied = params.occupied
    }

}