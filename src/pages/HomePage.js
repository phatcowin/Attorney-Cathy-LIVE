import './HomePage.scss';
import heroImage from '../img/adobe_stock_example.jpeg';
import officeImage from '../img/office_building.png';
import PracticesList from '../components/PracticesList';

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function HomePage() {
    return (
        <div className="home-page" width='100%' height='100%'>
            <div
                width='100%'
                className='hero-image'
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <Container fluid className='text-box-blue text-center'>
                    <Container>
                        <h1 className='hero-text'>
                            Law Offices of Cathy Cowin
                        </h1>
                        <h2>
                            Local Fresno Attorney since 1991. Empowering you to make decisions concerning your legal needs and meet your goals.
                        </h2>
                        <Button className='call-to-action' href='https://lawofficesofcathycowin.cliogrow.com/book'>
                            Schedule An Appointment
                        </Button>
                    </Container>
                </Container>
            </div>
            <Container fluid>
                <Container>
                    <Container className='practices-list text-center'>
                        <PracticesList />
                    </Container>
                </Container>
            </Container>
            <div
                width='100%'
                className='hero-image'
                style={{ backgroundImage: `url(${officeImage})` }}
            >
                <Container fluid className='text-box-blue text-center'>
                    <Container>
                        <h2>
                            What To Expect
                        </h2>
                    </Container>
                </Container>
            </div>
            <Container>
                <Container className='text-box-white text-center'>
                    <p>
                        When you call my office, I will answer personally whenever
                        possible. If I can't take your call immediately, you can
                        expect a timely call back. You're also welcome to leave a
                        message by email at&nbsp;
                        <a href='mailto:cathy@attorneycathycowin.com'>
                            cathy@attorneycathycowin.com
                        </a>
                        . (Please do not leave any confidential information until
                        a conflicts check has been created.)
                    </p>
                    <Button className='call-to-action' href='tel:559-570-3735'>
                        Call (559) 570-3735
                    </Button>

                    <hr />

                    <p>
                        We do NOT accept cases concerning residential
                        landlord-tenant (e.g. problems with your apartment landlord),
                        personal injury or workers compensation; small claims court
                        (under $10,000 in damages); estate planning, or family law
                        (divorce and child custody),
                    </p>
                    <p>
                        Nothing on this webpage creates an attorney-client
                        relationship. Nothing is intended to provide advice
                        outside of the State of California.
                    </p>
                </Container>
            </Container>
        </div>
    );
}

export default HomePage;