import React from 'react'
import {Button, Content, Img, NoPlace, ParkingArea, ParkingPlace, MessageText} from "./parkingStyles";
import {IParkingVM} from "../../view-model/parking-view-model";
import motorbike from "../../assets/motorbike.png"
import {useDispatch} from "react-redux";
import {ParkingActionsImpl} from "../../Redux/actions/parkingActions";


interface Props {
    places:Array<IParkingVM>
}

const MotorbikePlacesList : React.FC<Props> = ({places}) => {
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
                                        <Img src={motorbike} alt="motorbike" />

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
export default MotorbikePlacesList