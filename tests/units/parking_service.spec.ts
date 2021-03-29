import {createStore} from "redux";
import  rootReducer  from '../../src/parking/Adapters/secondary/Redux/reducers'
import {ParkingInMemoryStorage} from "../../src/parking/Adapters/secondary/inMemory/parking_slot_in_memory";
import {ParkingService} from "../../src/parking/usecases/parking_service";
import {VehicleParked} from "../../src/parking/Adapters/secondary/Redux/actions/parkingActions";
import store from "../../src/parking/Adapters/secondary/Redux/store/store";

describe('Parking places handler', () => {
    beforeEach(() => {
        createStore(rootReducer);
    })
    let fakeVehicle: VehicleParked = {
        no_place: 20,
        vehicle: {
            ref: "FR29065",
            type: "car"
        },
    };
    it('should park a vehicle', done => {
        let parkingSource: ParkingInMemoryStorage = new ParkingInMemoryStorage()
        let parkingService: ParkingService = new ParkingService(parkingSource)
        parkingService.parkVehicleToPlace(fakeVehicle)
        expect(store.getState().parking.isFree).toEqual(false)
        done()
    })
})