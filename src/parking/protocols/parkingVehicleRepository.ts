import {VehicleParked} from "../Adapters/secondary/Redux/actions/parkingActions";
import {AxiosResponse} from "axios";

export interface ParkingPlaceVehicleRepository {
    parkVehicle(vehcileParked: VehicleParked):Promise<void>

}
