import React from 'react'
import {Button, Content, Img, NoPlace, ParkingArea, ParkingPlace} from "./parkingStyles";
import {IParkingVM} from "../../view-model/parking-view-model";
import motorbike from "../../assets/motorbike.png"
interface Props {
    parkVehicle():void
    places:Array<IParkingVM>
}

const MotorbikePlacesList : React.FC<Props> = ({places,parkVehicle}) => {


    const handleClickParkVehicle = () => {

    }
    return (
            <>
                {places.length > 0 && (
                    <Content>
                        {places.map(place => (
                            <ParkingArea key={place.no_place}>
                                <NoPlace>{place.no_place}</NoPlace>
                                <Img src={motorbike} alt="Motorbike" />
                                <ParkingPlace>{place.occupied}</ParkingPlace>
                                <Button onClick={handleClickParkVehicle}>Stationner</Button>
                            </ParkingArea>
                        ) )}
                    </Content>
                )}
        </>
    )
}
export default MotorbikePlacesList