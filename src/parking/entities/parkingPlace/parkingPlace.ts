export interface ParkingPlace {
    isFree: boolean
    parkingPlaceType: ParkingPlaceType
    no_place: number
}

export type ParkingPlaceType = "carPlace" | "motorbikePlace" | "handicapedPlace"