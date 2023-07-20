import Header from './Header'
import Footer from './Footer'
import React, { useState } from 'react';
import Web3 from 'web3';
import busdABI from './busdAPI.json';
export default function Donate() {
    const [receiverAddress, setReceiverAddress] = useState('');
  const [amountToSend, setAmountToSend] = useState('');

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
    <Footer/>
    </>
  )
}
