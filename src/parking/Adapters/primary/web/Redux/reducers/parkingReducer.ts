import {ParkingPlace} from "../../../../../domain/entities";
import {ParkingAction} from "../../../presenters/actions-protocols/parkingActions";
import {GET_PLACES, PARK_VEHICLE} from "../actions/parkingActions";

export type ParkingState = {
    parkingPlaces: ParkingPlace[]
}

 const initialState: ParkingState = {
    parkingPlaces: [],

}
export const parkingReducer = (state: ParkingState = initialState, action: ParkingAction) =>{
    switch (action.type) {
        case GET_PLACES:
            return {
                ...state,
                parkingPlaces: action.payload
            }
        case PARK_VEHICLE:
            return {
                parkingPlaces: state.parkingPlaces.map((place) =>
                    (place.occupied === action.payload) ? {...place, occupied: true}: place)
            }
        default:
            return state
    }

}

