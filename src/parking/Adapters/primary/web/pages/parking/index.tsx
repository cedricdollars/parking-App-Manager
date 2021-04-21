import React, {useEffect} from 'react'
import Header from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import {Container, Line, ParkContainer, Title, Select} from './parkingStyles'
import {RootState } from '../../Redux/store/store'
import di from '../../dependency-injection/concretions'
import CarPlacesList from "./carPlacesList";
import {ParkingVM} from "../../view-model/parking-view-model";
import { ParkingParams } from '../../../../../domain/entities/parkingDTO';
import MotorbikePlacesList from "./motorbikePlacesList";
import {ParkingActionsImpl} from "../../Redux/actions/parkingActions";
import {ParkingPlace} from "../../../../../domain/entities";


const ParkingHome: React.FC = () => {
    const places = useSelector<RootState, RootState["parking"]>((state: RootState) => state.parking)
    const dispatch = useDispatch()

    let diParking = new ParkingActionsImpl();
    const parkVehicle = async (no_place: number) => {
        dispatch(diParking.parkVehicleToPlace(no_place))
    }
    const asyncFunc = async () => {
        dispatch(await di.parking.getParkingPlaces())
    }
    useEffect(() => {
        asyncFunc()
    }, [])

    function filterVehicleType(type:string, arrayOfPlaces: Array<ParkingPlace>) {
       return arrayOfPlaces
            .filter((place : {place_type:string}) => place.place_type == type)
            .map((place: ParkingParams) => new ParkingVM(place))
    }

    if(places.parkingPlaces.length === 0) {
        return (<Title>Wait a few moment... </Title>)
    }
    else {
        const placesListCar = filterVehicleType("car", places.parkingPlaces)
        const placesListMoto = filterVehicleType("motorbike", places.parkingPlaces)
        return (
            <>
                <Header/>
                <Container>
                    <ParkContainer>
                        <Select>
                            <option value="1">1er niveau</option>
                            <option value="2">2e niveau</option>
                            <option value="3">3e niveau</option>
                        </Select>
                         <CarPlacesList places={placesListCar}/>
                         <Line />
                         <MotorbikePlacesList places={placesListMoto} />
                    </ParkContainer>
                </Container>
            </>
        )
    }
}
export default ParkingHome