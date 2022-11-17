import { Link } from 'react-router-dom';
import logo from '../../images/icon.PNG';
import fullicon from '../../images/fullicon.PNG';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar} from 'react-bootstrap';
import './header.css';

const Navbars = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant='dark' id='nav-bg'>
    <Navbar.Brand href="/" className='con1'>
      <div className='logo'>
        <img src={logo} alt='' className='logo1'/>
        <img src={fullicon} alt='' className='fullicon'/>
      </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav toggle" className='con2' />
    <Navbar.Collapse id="responsive-navbar-nav toggle" className='con3'>
        <Nav className="ml-auto right list">
            <Nav.Link href="/" id='tc'>Home</Nav.Link>
            <Nav.Link href="/photos" id='tc'>Photos</Nav.Link>
            <Nav.Link href="/contact" id='tc'>Contact US</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
  );
};

export default Navbars;