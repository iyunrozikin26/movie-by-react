import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand>Hack-Movies</Navbar.Brand>

                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
