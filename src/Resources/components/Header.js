import style from '../css/header.module.css';
import logo from '../images/logo.png'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar,Container } from 'react-bootstrap';
import { useAuth } from '../../Authentication';
import {useNavigate} from 'react-router-dom';
function Header()
{
    const auth=useAuth
      const navigate = useNavigate();
   return(
      <>
      <Navbar className={style.colorNav} collapseOnSelect  expand='md'>
            <Container>
                  <Navbar.Brand>
                              <div className={style.logoWrapper}>
                              < img src={logo} alt="logo"/>
                              </div>
                  </Navbar.Brand>

                  <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                  <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ms-auto'>
                              <Nav.Link className={style.navLink}  onClick={()=>{navigate('/')}}>Home</Nav.Link>
                              <Nav.Link className={style.navLink}  onClick={()=>{navigate('donate')}} >Donate Now</Nav.Link>
                              <Nav.Link className={style.navLink} onClick={()=>{navigate('lend')}}>Lend</Nav.Link>
                              <Nav.Link className={style.navLink} onClick={()=>{navigate('loan')}}>Loan</Nav.Link>
                              <Nav.Link className={style.navLinkbtn} > {auth.user?"Connected":"Connect Wallet"}</Nav.Link>                           
                        </Nav>
                  </Navbar.Collapse>
            </Container>
      </Navbar>
    
</>
    );
}
export default Header;