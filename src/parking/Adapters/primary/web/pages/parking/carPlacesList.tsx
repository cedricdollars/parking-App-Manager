import React from 'react'
import {Button, ParkingArea, Content, ParkingPlace} from "./parkingStyles";
import {ParkingParams} from "../../../../../domain/entities/parkingDTO";
import {IParkingVM} from "../../view-model/parking-view-model";
import {useDispatch} from "react-redux";
//import di from '../../dependency-injection/concretions'


interface IProps {
    parkVehicle(params: ParkingParams):void
    places:Array<IParkingVM>
}


const CarPlacesList :React.FC<IProps> = ({places,parkVehicle}) => {
    const dispatch = useDispatch()
    const handleClickParkVehicle = () => {

    }

    return (
        <>
            {places.length > 0 && (
               <Content>
                   {places.map(place => (
                       <ParkingArea key={place.no_place}>
                           <ParkingPlace>{place.no_place}</ParkingPlace>
                           <Button onClick={handleClickParkVehicle}>Stationner</Button>
                       </ParkingArea>
                   ) )}
               </Content>
            )}

        </>
    )
}
export default CarPlacesList