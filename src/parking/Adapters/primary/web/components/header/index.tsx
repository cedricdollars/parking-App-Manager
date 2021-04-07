import {FC} from 'react';
import { Navbar, Logo, NavbarElements} from "./header.styles";

const Header: FC = () => {
    return (
        <Navbar>
            <NavbarElements>
                <Logo>ParkFree </Logo>
            </NavbarElements>

        </Navbar>
    )
}
export default Header;