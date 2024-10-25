import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap';
import logo_black from '../img/logo.svg';
import logo_white from '../img/logo_white.svg';
import './DefaultLayout.scss';
import Disclaimers from '../components/Disclaimers';
import { useLocation } from 'react-router-dom';

function Layout() {
    const location = useLocation();
    var skipLocation = '#home-page';
    console.log(location.pathname);
    if (location.pathname === '/about')
        skipLocation = '#about-page';
    else if (location.pathname === '/agriculture')
        skipLocation = '#agriculture-page';
    else if (location.pathname === '/business')
        skipLocation = '#business-page';
    else if (location.pathname === '/contact')
        skipLocation = '#contact-page';
    else if (location.pathname === '/mediation')
        skipLocation = '#mediation-page';
    else if (location.pathname === '/real-estate')
        skipLocation = '#real-estate-page';

    return (
        <div className='default-layout'>
            <header>
                <a className='skip-link' href={skipLocation}>Skip to content</a>
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

                            { /* eslint-disable-next-line */ }
                            <Navbar.Collapse id='basic-navbar-nav' role='navigation' aria-description='Main Menu'>
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
                                        (559) 570-3647
                                    </h4>
                                    <h4>
                                        &copy; 2024 Law Offices of Cathy Cowin<br />
                                        <a href='https://cowin.dev'>
                                            Designed by Dalton
                                        </a>
                                    </h4>
                                </Col>
                                <Col xs={5}>
                                { /* eslint-disable-next-line */}
                                    <Nav className='flex-column align-right' role='navigation' aria-description='Site Map'>
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