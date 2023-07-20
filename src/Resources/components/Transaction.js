import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
export default function Transaction() {
  const [start, setstart] = useState(0);
  const [transactions, settransactions] = useState([
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
    },
  ]);
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <Container>
        <h3 className="titlerequest">Transactions</h3>
        {transactions.slice(start, start + 5).map((data,index) => {
          return (
            <Row className="mb-3" key={index}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          defaultValue={data.name}
                          readOnly
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Label>BUSD Address</Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={data.targetaddress}
                          readOnly
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={data.title}
                          readOnly
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                          type="number"
                          defaultValue={data.amount}
                          readOnly
                        />
                      </Form.Group>
                    </Row>
                  </Card.Text>
                  <Row className="mb-3">
                    <Col>
                      <Button className="nextBtn">Detailed View</Button>
                    </Col>
                    <Col>
                      <Button className="trackBtn">Track Transactions</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Row>
          );
        })}
        <Row className="mb-3">
          <Col>
            {start >= 5 ? (
              <Button
                className="trackBtn"
                onClick={(e) => {
                  e.preventDefault();
                  setstart((s) => s - 5);
                }}
              >
                Back
              </Button>
            ) : (
              <></>
            )}
          </Col>
          <Col>
            {start + 5 < transactions.length ? (
              <Button
                className="nextBtn"
                onClick={(e) => {
                  e.preventDefault();
                  setstart((s) => s + 5);
                }}
              >
                Next
              </Button>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
