import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" className="d-flex justify-content-center">
                <Container className="d-flex m-2 align-items-center">
                    <Navbar.Brand className="p-1" as={Link} to='/'>
                        Tech-Store
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/category/perifericos'>Perifericos</Nav.Link>
                        <Nav.Link as={Link} to='/category/hardware'>Hardware</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </header>
    )
};

export default NavBar;