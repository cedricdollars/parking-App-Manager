import {ParkingSpaceCar} from "./parkingSpaceCar/parking_space_car";
import {ParkingSpaceMotorbike} from "./parkingSpaceMotorBike/parking_space_motorbike";

export interface ParkingLot {
    parkingSpaceCar: ParkingSpaceCar[]
    parkingSpaceMotorbike: ParkingSpaceMotorbike[]
}