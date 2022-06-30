import { useContext } from "react";


import { Container } from "./styles";

const Navbar = () => {
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
        <Container>
            <img
                src={logoImg}
                alt="PokeAPI Logo"
                className="navbar-img"
            />
        </Container>
    );
};

export default Navbar;
