import {Vehicle} from "../../../../../domain/entities/vehicle/vehicle";

export const ADD_VEHICLE = "ADD_VEHICLE"
export const REMOVE_VEHICLE = "REMOVE_VEHICLE"


export interface AddVehicleAction {
    type: typeof ADD_VEHICLE,
    payload : Vehicle
}
export interface RemoveVehicleAction {
    type: typeof REMOVE_VEHICLE,
    payload: string
}
export function addVehicle(newVehicle: Vehicle):AddVehicleAction {
    return  {
        type: ADD_VEHICLE,
        payload: newVehicle
    }
}
export function deleteVehicle(matricule:string):RemoveVehicleAction {
    return {
        type: REMOVE_VEHICLE,
        payload: matricule
    }
}

export type VehicleActions = AddVehicleAction | RemoveVehicleAction