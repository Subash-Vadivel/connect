import logo from '../images/logo.png'
import Nav from 'react-bootstrap/Nav';
import { Navbar,Container } from 'react-bootstrap';
import { useAuth } from '../../Authentication';
import {useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react';
import Web3 from 'web3';
function Header()
{
    const auth=useAuth();
      const navigate = useNavigate();
      const [web3, setWeb3] = useState(null);
      const [account, setAccount] = useState('');
       
      const connect=(e) => {
            e.preventDefault();
            // Check if MetaMask is installed in the user's browser
    if (typeof window.web3 === 'undefined') {
      alert('Please install MetaMask to use this application.');
      return;
    }

    // Create a Web3 instance using MetaMask provider
    const web3Instance = new Web3(window.web3.currentProvider);
    setWeb3(web3Instance);

    // Fetch the user's account address from MetaMask
    const fetchAccount = async () => {
      try {
        const accounts = await web3Instance.eth.getAccounts();
        auth.login(accounts[0])
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error fetching account:', error);
        alert('Error fetching account. Please check the console for more details.');
      }
    };

    fetchAccount(); // Call the function to fetch the account address
      }

   return(
      <>
      <Navbar className="colorNav" collapseOnSelect  expand='md'>
            <Container>
                  <Navbar.Brand>
                              <div className="logoWrapper">
                              < img src={logo} alt="logo"/>
                              </div>
                  </Navbar.Brand>

                  <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                  <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto'>
                              <Nav.Link className="navLink"  onClick={()=>{navigate('/')}}>Home</Nav.Link>
                              <Nav.Link className="navLink"  onClick={()=>{navigate('/donate')}} >Donate Now</Nav.Link>
                              <Nav.Link className="navLink" onClick={()=>{navigate('/request')}}>Request</Nav.Link>
                              <Nav.Link className="navLink" onClick={()=>{navigate('/transactions')}}>Transactions</Nav.Link>
                              {auth.account||account?
                              <Nav.Link className="navLinkbtn" ><span>Connected</span> </Nav.Link>
                              :<Nav.Link className="navLinkbtn" onClick={connect}><span style={{color:"#ED117F"}}>Connect</span></Nav.Link>                           
                        }
                        </Nav>
                  </Navbar.Collapse>
            </Container>
      </Navbar>
    
</>
    );
}
export default Header;