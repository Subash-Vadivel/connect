import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
export default function Request() {

    const [email,setemail]=useState();
    const [name,setname]=useState();
    const [desc,setdesc]=useState();
    const [amount,setamount]=useState();
    const [recadd,setrecadd]=useState();
    const [add1,setadd1]=useState();
    const [add2,setadd2]=useState();
    const [city,setcity]=useState();
    const [state,setstate]=useState();
    const [zip,setzip]=useState();
    const [deadline,setdeadline]=useState();
    const [proof,setproof]=useState();
    const [title,settitle]=useState();
    const [mobile,setmobile]=useState();
    const handleRequest=async(e)=>{
        e.preventDefault();

    }

  return (
    <>
    <Header/>
    <Container>
        <h3 className='titlerequest'>Fund Request</h3>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email<span className="required">*</span></Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name<span className="required">*</span></Form.Label>
          <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridTitle">
          <Form.Label>Title<span className="required">*</span></Form.Label>
          <Form.Control type="number" placeholder="Enter Title"  value={title} onChange={(e)=>settitle(e.target.value)}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAmount">
          <Form.Label>Amount<span className="required">*</span></Form.Label>
          <Form.Control type="number" placeholder="Enter Amount"  value={amount} onChange={(e)=>setamount(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress">
          <Form.Label>BUSD Address<span className="required">*</span></Form.Label>
          <Form.Control type="text" placeholder="busd Address" value={recadd} onChange={(e)=>setrecadd(e.target.value)}/>
        </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description<span className="required">*</span></Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Give the detailed info' value={desc} onChange={(e)=>setdesc(e.target.value)} required/>
      </Form.Group>
      <Row>
      <Form.Group as={Col} controlId="formFile" className="mb-3">
        <Form.Label>Proof<span className="required">*</span></Form.Label>
        <Form.Control type="file" value={proof} onChange={(e)=>setproof(e.target.value)}/>
      </Form.Group>
      <Form.Group as={Col} controlId="dob" className="mb-3">
                            <Form.Label>Due Date<span className="required">*</span></Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" value={deadline} onChange={(e)=>setdeadline(e.target.value)}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridmobile">
          <Form.Label>Mobile<span className="required">*</span></Form.Label>
          <Form.Control type="number" placeholder="Enter Contact Number"  value={mobile} onChange={(e)=>setmobile(e.target.value)}/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address<span className="required">*</span></Form.Label>
        <Form.Control placeholder="1234 Main St" value={add1} onChange={(e)=>setadd1(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2<span className="required">*</span></Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" value={add2} onChange={(e)=>setadd2(e.target.value)}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City<span className="required">*</span></Form.Label>
          <Form.Control placeholder='City' value={city} onChange={(e)=>setcity(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State<span className="required">*</span></Form.Label>
          <Form.Control placeholder='State' value={state} onChange={(e)=>setstate(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip<span className="required">*</span></Form.Label>
          <Form.Control placeholder='Zip Code' value={zip} onChange={(e)=>setzip(e.target.value)}/>
        </Form.Group>
      </Row>
    
      <Button onClick={handleRequest} variant="primary" type="submit" style={{alignContent:'center',margin:'auto',display:'flex',backgroundColor:'#ED117F',borderWidth:'0',padding:'10px',marginBottom:'20px'}}>
        Request
      </Button>
    </Form>
    </Container>
    <Footer/>
    </>
  )
}
