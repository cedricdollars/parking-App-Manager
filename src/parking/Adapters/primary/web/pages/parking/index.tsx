import React, {useEffect} from 'react'
import Header from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import {Container, ParkContainer, Title} from './parkingStyles'
import {RootState } from '../../Redux/store/store'
import di from '../../dependency-injection/concretions'
import CarPlacesList from "./carPlacesList";
import {ParkingVM} from "../../view-model/parking-view-model";
import { ParkingParams } from '../../../../../domain/entities/parkingDTO';


const ParkingHome: React.FC = () => {

    const places = useSelector<RootState, RootState["parking"]>((state: RootState) => state.parking)
    const placesList = places.parkingPlaces.carPlaces.map((place: ParkingParams) => new ParkingVM(place))
    const dispatch = useDispatch()

    const asyncFunc = async () => {
        dispatch(await di.parking.getParkingPlaces())
    }
    useEffect(() => {
        asyncFunc()
    }, [])

        return (
            <>
                <Header/>
                <Container>
                    <ParkContainer>
                        <Title>Sélectionner votre place </Title>
                        <CarPlacesList places={placesList} parkVehicle={alert}/>
                    </ParkContainer>
                </Container>
            </>
        )
}
export default ParkingHome