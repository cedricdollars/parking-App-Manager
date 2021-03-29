import {Dispatch} from 'redux'
import {ParkingPlaceVehicleRepository} from "../../../protocols/parkingVehicleRepository";
import {ParkingActions, parkVehicle, ParkVehicleAction, VehicleParked} from "../Redux/actions/parkingActions";
import {RootState} from "../Redux/store/store";

 class ParkingReduxGateway implements ParkingPlaceVehicleRepository {
    getState: () => RootState
    dispatch: Dispatch<ParkingActions>

    constructor(getState:() => RootState, dispatch: Dispatch<ParkingActions>) {
        this.getState = getState
        this.dispatch = dispatch
    }

    async parkVehicle(vehcileParked:VehicleParked): Promise<void> {

    }

}


export default ParkingReduxGateway