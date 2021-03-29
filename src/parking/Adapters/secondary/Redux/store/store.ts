import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from '../reducers'
import {getParkingPlaces} from "../actions/parkingActions";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export type RootState = ReturnType<typeof rootReducer>

// @ts-ignore
store.dispatch(getParkingPlaces())

export default store;