import {ParkingVehicleRepository} from "../../../domain/usecases/protocols/parkingVehicleRepository";
import {Http} from "../http/http";
import {ParkingDTO, ParkingParams} from "../../../domain/entities/parkingDTO";

export class ParkingRepository implements ParkingVehicleRepository {

    constructor(private http: Http) {}

    async getParkingPlaces(): Promise<Array<ParkingParams>> {
       const response =  await this.http.execute({
            method: "GET",
            url:"http://localhost:3000/parking/"
        })
        if (response?.parking) {
            return response.parking.map((data:ParkingParams) => new ParkingDTO(data))
        }
        return response
    }

}
