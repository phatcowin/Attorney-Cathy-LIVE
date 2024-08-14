import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap';
import logo_black from '../img/logo.svg';
import logo_white from '../img/logo_white.svg';
import './DefaultLayout.scss';
import Disclaimers from '../components/Disclaimers';

function Layout() {
    return (
        <div className='default-layout'>
            <header>
                <Container className='navbar-container'>
                    <Navbar
                        className='default-navbar'
                        expand='lg'
                    >
                        <Container fluid>
                            <Navbar.Brand
                                href='/'
                                aria-label='Home'
                            >
                                <img
                                    src={logo_black}
                                    alt="Law Offices of Cathy Cowin"
                                />
                                <span className='align-middle'>
                                    <h3>
                                        Law Offices of
                                    </h3>
                                    <h2>
                                        Cathy Cowin
                                    </h2>
                                </span>
                            </Navbar.Brand>
                            <Navbar.Toggle className='navbar-toggle' aria-controls='basic-navbar-nav' />

                            <Navbar.Collapse id='basic-navbar-nav'>
                                <Container>
                                    <Nav className="me-auto nav-links justify-content-end">
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/about">About</Nav.Link>
                                        <Nav.Link href="/agriculture">Agricultural Law</Nav.Link>
                                        <Nav.Link href="/business">Business Law</Nav.Link>
                                        <Nav.Link href="/real-estate">Real Estate Law</Nav.Link>
                                        <Nav.Link href="/mediation">Mediation</Nav.Link>
                                        <Nav.Link href="/contact">Contact</Nav.Link>
                                    </Nav>
                                </Container>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Container>
            </header>

            <Outlet />

            <Disclaimers />

            <footer>
                <Container fluid className='default-footer'>
                    <Container className='footer-container'>
                        <Container>
                            <Row>
                                <Col xs={7}>
                                    <div className='logo-with-name'>
                                        <img
                                            src={logo_white}
                                            alt="Cathy Cowin Logo"
                                        />
                                        <span className='align-middle'>
                                            <h3>Law Offices of</h3>
                                            <h2>Cathy Cowin</h2>
                                        </span>
                                    </div>
                                    <h4>
                                        7600 North Ingram, Suite 102,<br />
                                        Fresno, California 93711 <br />
                                        (559) 570-3735
                                    </h4>
                                    <h4>
                                        &copy; 2024 Law Offices of Cathy Cowin<br />
                                        <a href='https://cowin.dev'>
                                            Designed by Dalton
                                        </a>
                                    </h4>
                                </Col>
                                <Col xs={5}>
                                    <Nav className='flex-column align-right'>
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/about">About</Nav.Link>
                                        <Nav.Link href="/agriculture">Agricultural Law</Nav.Link>
                                        <Nav.Link href="/business">Business Law</Nav.Link>
                                        <Nav.Link href="/real-estate">Real Estate Law</Nav.Link>
                                        <Nav.Link href="/mediation">Mediation</Nav.Link>
                                        <Nav.Link href="/contact">Contact</Nav.Link>
                                    </Nav>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </footer>
        </div>
    );
}

export default Layout;