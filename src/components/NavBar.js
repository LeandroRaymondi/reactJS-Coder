import { Container, Nav, Navbar, Image } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container className="d-flex m-2 align-items-center">
                    <Navbar.Brand className="p-1" href="#home">Tech-Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Perifericos</Nav.Link>
                        <Nav.Link href="#pricing">Hardware</Nav.Link>
                    </Nav>
                    <CartWidget  />
                </Container>
            </Navbar>
        </header>
    )
};

export default NavBar;