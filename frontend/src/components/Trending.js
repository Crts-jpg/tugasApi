import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../axiosConfig";


function Trending() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/discover/movie")
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        throw new Error('Gagal mendapatkan data film: ' + error.message);
      });
  }, [])

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_KEY,
          },
        })
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          throw new Error('Gagal mendapatkan data film: ' + error.message);
        });
    } catch (error) {
      console.error('Terjadi kesalahan: ' + error.message);
    }
  }, []);

  return (
    <Container>
      <br />
      <h1 id="trending" className="text-white ">
        Trending Movies
      </h1>
      <br />
      <Row>
        {Movies.map((result, index) => {
          return (
            <Col md={4} className="movieWrapper" key={index}>
              <Card className="text-white movieImage bg-dark">
                <Image
                  src={`${process.env.REACT_APP_IMAGE_URL}/${result.poster_path}`}
                  alt="test"
                  //   width="50%"
                  className="images"
                  //   height="auto"
                />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center ">
                      {result.title}
                    </Card.Title>
                    <Card.Text className="text-left ">
                      {result.overview}
                    </Card.Text>
                    <Card.Text className="text-left ">
                      {result.release_date}
                    </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Trending;
