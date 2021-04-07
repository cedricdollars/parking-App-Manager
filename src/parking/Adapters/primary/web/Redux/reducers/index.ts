import vehicleReducer from "./vehicleReducer";
import {combineReducers} from "redux";
import {parkingReducer} from "./parkingReducer";


export default combineReducers({
    parking: parkingReducer,
    vehicle: vehicleReducer
})