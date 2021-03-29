import {VehicleActions} from "../actions/vehicleAction";
import {Vehicle} from "../../../../entities/vehicle/vehicle";

export type VehicleState = {
    vehicles: Vehicle[]
}
export const initialStateForCar: VehicleState = {
    vehicles: []
}

export default function vehicleReducer (state: VehicleState = initialStateForCar, action: VehicleActions) {
    switch (action.type) {
        case "ADD_VEHICLE":
            return {
               cars: [...state.vehicles, action.payload]
            }
        case "REMOVE_VEHICLE":
            return {
                cars: state.vehicles.filter(vehicle => vehicle.ref !== action.payload)
            }
        default:
            return state
    }
}