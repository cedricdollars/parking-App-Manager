import {ParkingPlaceVehicleRepository} from "../protocols/parkingVehicleRepository";
import {Vehicle} from "../entities/vehicle/vehicle";
import {VehicleParked} from "../Adapters/secondary/Redux/actions/parkingActions";

export class ParkingService{
    private parkingRepository: ParkingPlaceVehicleRepository

    constructor(parkingRepository: ParkingPlaceVehicleRepository) {
      this.parkingRepository = parkingRepository
    }

  async parkVehicleToPlace(vehicleParked: VehicleParked) {
        await this.parkingRepository.parkVehicle(vehicleParked);
  }
}