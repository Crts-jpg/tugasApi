import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center ">
        <Row>
          <Col>
            <div className="title">NONTON FILMS</div>
            <div className="title">TERBARU DAN TERPOPULER</div>
            <div className="introButton mt-4">
              <Button variant="dark">Lihat Semua</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
