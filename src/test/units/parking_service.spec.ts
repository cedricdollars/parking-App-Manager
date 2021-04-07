import {ParkingPlaceVehicleRepository} from "../../parking/domain/usecases/protocols/parkingVehicleRepository";
import {ParkingRepository} from "../../parking/Adapters/secondary/inMemory/parkingVehicleRepositoryImpl";
import {HttpImpl} from "../../parking/Adapters/secondary/http/httpImpl";
import {ParkingService} from "../../parking/domain/usecases/parking_service";
import {ParkingPlace, Vehicle} from "../../parking/domain/entities";
import {Parking} from "../../parking/domain/entities/parking";

describe('Parking places handler', () => {
    const car:Vehicle = {
        matricule: "AA-239-Z",
        type:"car"
    }
    const carPlace: ParkingPlace = {
        no_place: 5,
        isFree: true,
        parkingPlaceType: "carPlace"
    }

    it("should park a new car", async() => {
        let parkingRepository: ParkingPlaceVehicleRepository = new ParkingRepository(new HttpImpl())
        let parkingService: ParkingService = new ParkingService(parkingRepository)
        const parked = await parkingService.parkVehicleInOnePlace(car, carPlace)

    })

})