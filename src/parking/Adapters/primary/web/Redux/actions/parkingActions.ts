import {ParkingAction, ParkingActions} from "../../../presenters/actions-protocols/parkingActions";
import {ParkingPlace} from "../../../../../domain/entities";
export const PARK_VEHICLE= "PARK_VEHICLE"
export const GET_PLACES = "GET_PLACES"
export const REMOVE_VEHICLE = "REMOVE_VEHICLE"

export class ParkingActionsImpl implements ParkingActions {

    getParkingPlaces(parkingEntity: Array<ParkingPlace>): ParkingAction {
        return {
            type: GET_PLACES,
            payload: parkingEntity
        }
    }

    parkVehicleToPlace(id: number): ParkingAction {
        return {
            type: PARK_VEHICLE,
            payload: id
        };
    }

}