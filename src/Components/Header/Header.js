// import '../Header/Header.css';


// const Header = () => {
//   return (
//     <nav>
//       <div className="logo">
//         <img src="logo.png" alt="Logo" />
//       </div>
//       <ul className="menu">
//         <li>
//           <a href="/feedback">Feedback</a>
//         </li>
//         <li>
//           <a href="/about">About</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }



// export default Header;
import '../Header/Header.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="sm" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand>Feedback App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/feedback">Feedback</NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="custom-form-search">
            <Form.Control
              type="search"
              className="custom-input"
              placeholder="Search"
              aria-label="Search"
            />
            <Button className="custom-form-search-button">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;