import {ParkingActions} from "../actions/parkingActions";
import {VehicleType} from "../../../../entities/vehicle/vehicle";

export type ParkingState = {
    isFree: boolean
    vehicle?: VehicleType
}

export const initialState: ParkingState = {
    isFree: true,
}

export default function parkingReducer(state:ParkingState = initialState, action: ParkingActions) {
    switch (action.type) {
        case "PARK_VEHICLE":
            return {
                ...state,
                free: false,
                vehicle: action.payload
            }
        case "REMOVE":
            return {
                //
            }
        case "GET_PARKING_PLACES" :
            return action.payload
        default:
            return state
    }
}