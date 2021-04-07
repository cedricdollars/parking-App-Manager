import {Vehicle} from "../../../../../domain/entities/vehicle/vehicle";
import {ParkingPlace} from "../../../../../domain/entities";
import {ParkingAction} from "../../../presenters/actions-protocols/parkingActions";
import {GET_PLACES, PARK_VEHICLE} from "../actions/parkingActions";

export type ParkingState = {
    isFree: boolean
    vehicle?: Vehicle
    parkingPlaces: ParkingPlace[]
}

export const initialState: ParkingState = {
    isFree: true,
    parkingPlaces: []
}
export const parkingReducer = (state: ParkingState = initialState, action: ParkingAction) =>{
    switch (action.type) {
        case GET_PLACES:
            return {
                ...state,
                isFree: true,
                parkingPlaces: action.payload
            }
        case PARK_VEHICLE:
            return {
                ...state,
                isFree: false,
                vehicle: action.payload
            }
        default:
            return state
    }
}

