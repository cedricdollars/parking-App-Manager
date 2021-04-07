export interface ParkingPlace {
    no_place: number
    isFree: boolean
    parkingPlaceType: ParkingPlaceType
}

export type ParkingPlaceType = "carPlace" | "motorbikePlace" | "handicapedPlace"