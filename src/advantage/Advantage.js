import React from "react";
import { Link } from "react-router-dom";
import { Row, Card, Col, Container } from "react-bootstrap";
import "./Advantage.css";

import Advantage1 from "../images/advantage/finans.png";
import Advantage2 from "../images/advantage/deposit.jpeg";
import Advantage3 from "../images/advantage/insuruance.jpeg";
import Advantage4 from "../images/advantage/retirment.jpeg";
import Advantage5 from "../images/advantage/invesment.jpeg";
import Advantage7 from "../images/advantage/payments.jpeg";

const Advantage = () => {
  const products = [
    {
      id: 1,
      image: Advantage1,
      title: "Credit",
    },
    {
      id: 2,
      image: Advantage2,
      title: "Insurance",
    },
    {
      id: 3,
      image: Advantage3,
      title: "Deposit",
    },
    {
      id: 4,
      image: Advantage4,
      title: "Retirement",
    },
    {
      id: 5,
      image: Advantage5,
      title: "Investment",
    },
    {
      id: 6,
      image: Advantage7,
      title: "Payments",
    },
  ];
  return (
    <Container>
      <h2 className="text-center mt-3">INSTITUTIONAL</h2>
      <p className="text-center mb-5">
        Banqsoft's core banking system offers complete solutions for financial
        consumer account management. Backed by highly digitized concepts,
        Banqsoft enables banks to offer innovative banking services while
        scaling their customer base - faster, and with ease.
      </p>
      <Row xs={1} md={2} className="g-4">
        {products.map((product) => (
          <Col>
            <Card className="mb-3">
              <Card.Body className="a-card-body" key={product.id}>
                <Link className="card-link" to={"/price"}>
                  <Card.Title className="card-title">
                    {product.title}
                  </Card.Title>
                </Link>
                <Card.Img src={product.image} className="card-img" />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Advantage;
