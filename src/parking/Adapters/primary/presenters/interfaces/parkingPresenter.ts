import {ParkingAction} from "../actions-protocols/parkingActions";


export interface IParkingPresenter {
    //parkVehicleToPlace():Promise<boolean>
    getParkingPlaces():Promise<ParkingAction>
}
