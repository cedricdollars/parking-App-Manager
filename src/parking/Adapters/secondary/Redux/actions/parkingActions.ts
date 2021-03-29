import { Dispatch, AnyAction} from "redux";
import axios from "axios";
import {Vehicle} from "../../../../entities/vehicle/vehicle";

export const PARK_VEHICLE = "PARK_VEHICLE"
export const REMOVE_VEHICLE = "REMOVE"
export const GET_PARKING_PLACES = "GET_PARKING_PLACES"

export type VehicleParked = {
    no_place: number
    vehicle: Vehicle
}
export interface ParkVehicleAction {
    type: typeof PARK_VEHICLE,
    payload: VehicleParked
}
export interface getParkingPlacesAction {
    type: typeof GET_PARKING_PLACES,
    payload: any
}

export interface RemoveVehicleAction {
    type: typeof REMOVE_VEHICLE,
    payload: string
}

export const getParkingPlaces = () => {
    return  (dispatch: Dispatch<AnyAction>) => {
           axios.get("http://localhost:3000/parking")
               .then(data => {
                   dispatch({
                       type: GET_PARKING_PLACES,
                       payload: data
                   })
               })
               .catch(error => console.log("Failed to load data ", error))
    }
}
export const parkVehicle = (data:VehicleParked) => {
    return (dispatch: Dispatch<AnyAction>) => {
        return axios.post("http://localhost:3000/parking/park",data,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "Application/json"
                }
            }
            )
            .then(res => {
                dispatch({
                    type: PARK_VEHICLE,
                    payload: data
                })
            }).catch(err => console.log(err))
    }
}


export function RemoveVehicle(id: string):RemoveVehicleAction {
    return {
        type: REMOVE_VEHICLE,
        payload: id
    }
}

export type ParkingActions = ParkVehicleAction | RemoveVehicleAction | getParkingPlacesAction