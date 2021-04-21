import React, {useState} from 'react'
import {Button, ParkingArea, Content, ParkingPlace, NoPlace, Img, MessageText} from "./parkingStyles";
import {IParkingVM} from "../../view-model/parking-view-model";
import car from '../../assets/car.png'
import {useDispatch} from "react-redux";
import {ParkingActionsImpl} from "../../Redux/actions/parkingActions";
import {Dialog} from "../../components/modal/dialog";


interface IProps {
    places:Array<IParkingVM>
}

const CarPlacesList :React.FC<IProps> = ({places}) => {
    const dispatch = useDispatch();
    const [isShown, setIsShown] = useState<boolean>(false)
    const diParking = new ParkingActionsImpl();
    const parkVehicle = async (no_place: number) => {
        setIsShown(!isShown)
        dispatch(diParking.parkVehicleToPlace(no_place))
    }
    const content = <React.Fragment>Hey, I'm a model.</React.Fragment>;
    return (
        <>
            {places.length > 0 && (
                <Content>
                    {places.map(place => (
                        <ParkingArea key={place.no_place}>
                            {place.occupied ? (
                                <>
                                    <Img src={car} alt="car" />
                                </>
                            ): (
                                <>
                                    <NoPlace>{place.no_place}</NoPlace>
                                    <ParkingPlace>{place.occupied}</ParkingPlace>
                                    <Button onClick={() => parkVehicle(place.no_place)}>Stationner</Button>
                                    {/* <Dialog isShown={isShown} hide={alert} content={content} headerText="Modal" /> */}
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