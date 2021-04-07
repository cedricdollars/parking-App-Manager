import {IParkingPresenter} from "./interfaces/parkingPresenter";
import {ParkingAction} from "./actions-protocols/parkingActions";
import {ParkingServiceInterface} from "../../../domain/usecases/protocols/parkingServiceInterface";
import {ParkingParams} from "../../../domain/entities/parkingDTO";


class ParkingPresenter implements IParkingPresenter {

    constructor(
        private readonly parkingService: ParkingServiceInterface,
        private readonly actions: any
    ) {
    }

    async parkVehicleToPlace(params: ParkingParams): Promise<boolean> {
        const isParked = await this.parkingService.parkVehicleInOnePlace(params)
        return this.actions.parkVehicleToPlace(isParked)
    }
    async getParkingPlaces(): Promise<ParkingAction> {
       const parkingPlaces:Array<ParkingParams> = await this.parkingService.getParkingPlaces()
        return this.actions.getParkingPlaces(parkingPlaces)
    }


}

export default ParkingPresenter