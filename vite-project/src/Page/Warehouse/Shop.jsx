import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardHeader,
  Col,
  Row,
  CardText,
  CardFooter,
  Button,
  CardTitle,
} from "react-bootstrap";
import NavBar from "../../Component/NavBar/NavBar";
import aflah from "../../assets/Image/Warehouse/FotoNaAflah.jpg";
import fatim from "../../assets/Image/Warehouse/FotoNaFatim.jpg";
import aurinka from "../../assets/Image/Warehouse/FotoNaAurinka.jpg";
import zahra from "../../assets/Image/Warehouse/FotoNaZahra.jpg";
import mikail from "../../assets/Image/Warehouse/FotoNaMikail.jpg";

export default function Shop() {
  const cardContent = [
    {
      img: zahra,
      title: "Zahra",
      text: "Orang bekas dari sunami",
      price: "Rp. 30.000,00",
    },
    {
      img: aflah,
      title: "Aflah",
      text: "Orang sudiang yang nyasar ke Makassar",
      price: "Rp.20.000,00",
    },
    {
      img: aurinka,
      title: "Aurinka",
      text: "Teroris dari arab yang lepas",
      price: "Rp. 10.000,00",
    },
    {
      img: mikail,
      title: "Mikail",
      text: "Orang sigma boy",
      price: "Rp.1.000.000,00",
    },
    {
      img: fatim,
      title: "Fatim",
      text: "Orang SAMPAH dibuang",
      price: "Rp.5.000,00",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="vh-100 d-flex bg-dark">
        <Row className="d-flex justify-content-center w-100">
          {cardContent.map((content, index) => (
            <Col
              key={index}
              lg="2"
              md="auto"
              xs="auto"
              className="cardContainer mt-3"
            >
              <CardGroup style={{ width: "200px", height: "400px" }}>
                <Card className="text-center shadow">
                  <CardHeader>
                    <CardImg
                      src={content.img}
                      style={{ width: "170px", height: "150px" }}
                    />
                  </CardHeader>

                  <CardBody>
                    <CardTitle>{content.title}</CardTitle>
                    <CardText>{content.text}</CardText>
                    <CardText>{content.price}</CardText>
                  </CardBody>

                  <CardFooter>
                    <Button>Buy Now</Button>
                  </CardFooter>
                </Card>
              </CardGroup>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
