import {parkingReducer} from "../../../parking/Adapters/primary/web/Redux/reducers/parkingReducer";
import {ParkingActionsImpl} from "../../../parking/Adapters/primary/web/Redux/actions/parkingActions";

describe("parking Reducer ", () => {

    let action: ParkingActionsImpl
    beforeEach(() => {
       action =  new ParkingActionsImpl();
    })
    const initialStateParking = {
        isFree: true,
        parkingPlaces: []
    }

    it('Should have an initial state', () => {
        expect(parkingReducer(undefined, action.getParkingPlaces(initialStateParking.parkingPlaces)))
            .toEqual(initialStateParking)
    })
})