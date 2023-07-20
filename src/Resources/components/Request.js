import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
export default function Request() {
  return (
    <>
    <Header/>
    <Container>
        <h3 className='titlerequest'>Fund Request</h3>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="Enter Amount" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Label>XRP Address</Form.Label>
          <Form.Control type="text" placeholder="XRP Address" />
        </Form.Group>

        
        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Label>XRP Tag</Form.Label>
          <Form.Control type="text" placeholder="XRP Tag" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Give the deatiled info' />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
    
      <Button variant="primary" type="submit" style={{alignContent:'center',margin:'auto',display:'flex',backgroundColor:'#ED117F',borderWidth:'0',padding:'10px',marginBottom:'20px'}}>
        Request
      </Button>
    </Form>
    </Container>
        <Footer/>
    </>
  )
}
