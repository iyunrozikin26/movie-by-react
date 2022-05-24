import { Card, Col, Row, Container, Image } from "react-bootstrap";
import doctorstrange from "../assets/superhero/doctorstrange.jpg";
import avenger from "../assets/superhero/avenger.jpg";
import avengerendgame from "../assets/superhero/avengerendgame.jpg";
import thebatman from "../assets/superhero/thebatman.jpg";
import wonderwoman from "../assets/superhero/wonderwoman.jpg";
const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 id="superhero" className="text-white">SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" >
                        <Card className="bg-dark text-white movieImage">
                            <Image src={doctorstrange} alt="Doctor Strange" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Doctor Strange</Card.Title>
                                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={avengerendgame} alt="Doctor Strange" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Avenger endgame</Card.Title>
                                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={avenger} alt="Doctor Strange" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Avenger Infinity War</Card.Title>
                                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={thebatman} alt="Doctor Strange" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Batman</Card.Title>
                                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={wonderwoman} alt="Doctor Strange" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Wonder Women</Card.Title>
                                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                            <Image src={doctorstrange} alt="Doctor Strange" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Doctor Strange</Card.Title>
                                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Superhero;
