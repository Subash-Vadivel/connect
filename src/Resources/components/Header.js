import logo from "../images/logo.png";
import Nav from "react-bootstrap/Nav";
import { Navbar, Container } from "react-bootstrap";
import { useAuth } from "../../Authentication";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Web3 from "web3";
function Header() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(auth.account);

  const connect = async(e) => {
    e.preventDefault();
    // Check if MetaMask is installed in the user's browser
    if (typeof window.ethereum === "undefined") {
      alert("Please install MetaMask to use this application.");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        auth.login(accounts[0]);
        setAccount(accounts[0]);
      } else {
        alert("No accounts found in MetaMask.");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Error connecting to MetaMask. Please check the console for more details.");
    }
  };

  return (
    <>
      <Navbar className="colorNav" collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand>
            <div className="logoWrapper">
              <img src={logo} alt="logo" />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className="navLink"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="navLink"
                onClick={() => {
                  navigate("/donate");
                }}
              >
                Donate Now
              </Nav.Link>
              <Nav.Link
                className="navLink"
                onClick={() => {
                  navigate("/request");
                }}
              >
                Request
              </Nav.Link>
              <Nav.Link
                className="navLink"
                onClick={async(e) => {
                  e.preventDefault();
                  if (!account) {
                    console.log("logging in")
                     await connect(e);
                  }
                  else{
                    navigate("/transactions");
                  }
                }}
              >
                Transactions
              </Nav.Link>
              {account ? (
                <Nav.Link className="navLinkbtn">
                  <span style={{ color: "#ED117F" }}>Connected</span>{" "}
                </Nav.Link>
              ) : (
                <Nav.Link className="navLinkbtn" onClick={connect}>
                  <span style={{ color: "#ED117F" }}>Connect</span>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
