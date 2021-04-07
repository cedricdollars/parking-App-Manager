import {ParkingPlace, Vehicle} from "../../../../domain/entities";
import {ParkingAction} from "../actions-protocols/parkingActions";
import {ParkingParams} from "../../../../domain/entities/parkingDTO";

export interface IParkingPresenter {
    parkVehicleToPlace(params: ParkingParams):Promise<boolean>
    getParkingPlaces():Promise<ParkingAction>
}
