import {ParkingPlaceVehicleRepository} from "../../../domain/usecases/protocols/parkingVehicleRepository";
import {Http} from "../http/http";
import {ParkingDTO, ParkingParams} from "../../../domain/entities/parkingDTO";

export class ParkingRepository implements ParkingPlaceVehicleRepository {

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

    parkVehicleInOnePlace(params: ParkingParams): Promise<boolean> {
        return this.http.execute({
            method: "POST",
            url: "http://localhost:3000/parking/park",
            headers:{
                'Content-Type': 'application/json'
            },
            body: {
                vehicle: params.vehicle
            }
        })
    }

}
