import {ParkingPlaceVehicleRepository} from "../../../protocols/parkingVehicleRepository";
import {VehicleParked} from "../Redux/actions/parkingActions";
import axios from "axios";

export class ParkingInMemoryStorage implements ParkingPlaceVehicleRepository {
    async parkVehicle(vehcileParked: VehicleParked): Promise<void> {
        return axios.post('http://localhost:3080/parking/park', vehcileParked)
            .then(data => console.log('parked'))
            .catch(error => console.log(error))

    }


}