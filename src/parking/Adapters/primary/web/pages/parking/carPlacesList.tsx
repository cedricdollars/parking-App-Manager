import React, {useState} from 'react'
import {Button, ParkingArea, Content, ParkingPlace, NoPlace, Img} from "./parkingStyles";
import {IParkingVM} from "../../view-model/parking-view-model";
import car from '../../assets/car.png'


interface IProps {
    parkVehicle(no_place: number):void
    places:Array<IParkingVM>
}


const CarPlacesList :React.FC<IProps> = ({places,parkVehicle}) => {
    const handleClickParkVehicle = () => {
            parkVehicle(5)
    }
    return (
        <>
            {places.length > 0 && (
               <Content>
                   {places.map(place => (
                       <ParkingArea key={place.no_place}>
                           <NoPlace>{place.no_place}</NoPlace>

                           <ParkingPlace>{place.occupied}</ParkingPlace>
                           <Button onClick={handleClickParkVehicle}>Stationner</Button>
                       </ParkingArea>
                   ) )}
               </Content>
            )}

        </>
    )
}
export default CarPlacesList