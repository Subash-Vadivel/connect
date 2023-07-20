import logo from '../images/logo.png'
import Nav from 'react-bootstrap/Nav';
import { Navbar,Container } from 'react-bootstrap';
import { useAuth } from '../../Authentication';
import {useNavigate} from 'react-router-dom';
function Header()
{
    const auth=useAuth
      const navigate = useNavigate();
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
                              <Nav.Link className="navLink"  onClick={()=>{navigate('donate')}} >Donate Now</Nav.Link>
                              <Nav.Link className="navLink" onClick={()=>{navigate('request')}}>Request</Nav.Link>
                              <Nav.Link className="navLink" onClick={()=>{navigate('transactions')}}>Transactions</Nav.Link>
                              {auth.user?
                              <Nav.Link className="navLinkbtn" ><span>Connected</span> </Nav.Link>
                              :<Nav.Link className="navLinkbtn" ><span style={{color:"#ED117F"}}>Connect</span></Nav.Link>                           
                        }
                        </Nav>
                  </Navbar.Collapse>
            </Container>
      </Navbar>
    
</>
    );
}
export default Header;