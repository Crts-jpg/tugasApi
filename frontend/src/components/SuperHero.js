import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/superhero/antman.jpg";
import everything from "../assets/images/superhero/avenger.jpg";
import infinite from "../assets/images/superhero/batman.jpg";
import joker from "../assets/images/superhero/robinhood.jpg";
import lightyear from "../assets/images/superhero/spiderman-cover.jpg";
import morbius from "../assets/images/superhero/superman.jpg";

function SuperHero() {
  return (
    <Container>
      <br />
      <h1 id="superhero" className="text-white ">SuperHero Movies</h1>
      <Row>
        <Col md={4} className="movieWrapper" >
          <Card className="text-white movieImage bg-dark">
            <Image
              src={duneImage}
              alt="Dune Movies"
              //   width="50%"
              className="images"
              //   height="auto"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center ">AntMan</Card.Title>
                <Card.Text className="text-left ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left ">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="text-white movieImage bg-dark">
            <Image
              src={everything}
              alt="Dune Movies"
              //   width="50%"
              className="images"
              //   height="auto"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center ">Avenger</Card.Title>
                <Card.Text className="text-left ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left ">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="text-white movieImage bg-dark">
            <Image
              src={infinite}
              alt="Dune Movies"
              //   width="50%"
              className="images"
              //   height="auto"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center ">Batman</Card.Title>
                <Card.Text className="text-left ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left ">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="text-white movieImage bg-dark">
            <Image
              src={joker}
              alt="Dune Movies"
              //   width="50%"
              className="images"
              //   height="auto"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center ">Robin Hood</Card.Title>
                <Card.Text className="text-left ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left ">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="text-white movieImage bg-dark">
            <Image
              src={lightyear}
              alt="Dune Movies"
              //   width="50%"
              //   height="auto"
              className="images"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center ">
                  Spiderman No Way Home
                </Card.Title>
                <Card.Text className="text-left ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left ">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="text-white movieImage bg-dark">
            <Image
              src={morbius}
              alt="Dune Movies"
              //   width="50%"
              //   height="auto"
              className="images"
            />
            <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center ">Superman</Card.Title>
                <Card.Text className="text-left ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left ">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SuperHero;
