import Header from './Header'
import Footer from './Footer'
import React, { useState } from 'react';
import Web3 from 'web3';
import busdABI from './busdAPI.json';
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Container } from 'react-bootstrap';
export default function Donate() {
    const [receiverAddress, setReceiverAddress] = useState('');
  const [amountToSend, setAmountToSend] = useState('');
  const [cards,setcards]=useState([
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },
    {
      title: "Heart Attack",
      name: "annamalai",
      targetaddress: "0xdsghdsdhsdjhsdsjh",
      amount: 10000,
      desc:"sjdhjsdhshbhsbf bskfsfkskjfh kjsfhskjf",
      duetime:"24-12-2023",
      check:true
    },

  ]);
  const handleSendBUSD = async () => {
    if (!receiverAddress || !amountToSend) {
      alert('Please fill all the required fields.');
      return;
    }

    try {
        if (typeof window.web3 === 'undefined') {
            alert('Please install MetaMask to use this feature.');
            return;
          }
      
          // Request access to the user's MetaMask account
          try {
            await window.ethereum.enable();
          } catch (error) {
            alert('Access to MetaMask denied by the user.');
            return;
          }
 // Create a Web3 instance using MetaMask provider
 const web3 = new Web3(window.web3.currentProvider);

 // Set the default account (sender) as the user's MetaMask account
 const accounts = await web3.eth.getAccounts();
 const senderAddress = accounts[0];

      // Initialize the BUSD contract instance
      const busdContract = new web3.eth.Contract(busdABI, "0x9c9e5fd8bbc25984b178fdce6117defa39d2db39");

      // Convert the amount to the smallest unit (wei)
      const amountInWei = web3.utils.toWei(amountToSend, 'ether');

      // Send BUSD to the receiver's address
      await busdContract.methods.transfer(receiverAddress, amountInWei).send({
        from: senderAddress,
      });
      alert('BUSD sent successfully!');
    } catch (error) {
      console.error('Error sending BUSD:', error);
      alert('Error sending BUSD. Please check the console for more details.');
    }
  };
  return (
    <>
    <Header/>
    <div>Donate</div>
    <div>
      <h2>Send BUSD</h2>
      <label>
        Receiver Address:
        <input type="text" onChange={(e) => setReceiverAddress(e.target.value)} />
      </label>
      <label>
        Amount to Send:
        <input type="number" step="0.01" onChange={(e) => setAmountToSend(e.target.value)} />
      </label>
      <button onClick={handleSendBUSD}>Send BUSD</button>
    </div>


    <Container style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
  {cards.map((data, index) => (
    <Card key={index} style={{ width: '30rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <div>
            <Card.Title>{data.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{data.title}</Card.Subtitle>
          </div>
          {data.check ? (
            <Card.Title style={{ color: 'red' }}>
              <span className="colored-circle" style={{ backgroundColor: 'red' }} />Live
            </Card.Title>
          ) : (
            <Card.Title style={{ color: 'black' }}>
              <span className="colored-circle" style={{ backgroundColor: 'black' }} />Ended
            </Card.Title>
          )}
        </div>
        <Card.Text>
          <p>{data.desc}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button className="nextBtn">View</Button>
            <Button className="trackBtn">Donate</Button>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
</Container>


    <Footer/>
    </>
  )
}
