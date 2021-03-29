import {Vehicle} from "../../../../entities/vehicle/vehicle";

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
export function deleteVehicle(ref:string):RemoveVehicleAction {
    return {
        type: REMOVE_VEHICLE,
        payload: ref
    }
}

export type VehicleActions = AddVehicleAction | RemoveVehicleAction