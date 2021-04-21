import React, {useState} from 'react'
import {Button, ParkingArea, Content, ParkingPlace, NoPlace, Img, MessageText} from "./parkingStyles";
import {IParkingVM} from "../../view-model/parking-view-model";
import car from '../../assets/car.png'
import {useDispatch} from "react-redux";
import {ParkingActionsImpl} from "../../Redux/actions/parkingActions";


interface IProps {
    places:Array<IParkingVM>
}

const CarPlacesList :React.FC<IProps> = ({places}) => {
    const dispatch = useDispatch();

    let diParking = new ParkingActionsImpl();
    const parkVehicle = async (no_place: number) => {
        dispatch(diParking.parkVehicleToPlace(no_place))
    }

    return (
        <>
            {places.length > 0 && (
                <Content>
                    {places.map(place => (
                        <ParkingArea key={place.no_place}>

                            {place.occupied ? (
                                <>
                                    <Img src={car} alt="car" />
                                    <MessageText>Occupée</MessageText>
                                </>

                            ): (
                                <>
                                    <NoPlace>{place.no_place}</NoPlace>
                                    <ParkingPlace>{place.occupied}</ParkingPlace>
                                    <Button onClick={() => parkVehicle(place.no_place)}>Stationner</Button>
                                </>
                            )}

                        </ParkingArea>
                    ) )}
                </Content>
            )}

        </>
    )
}
export default CarPlacesList