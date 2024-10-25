import './ContactPage.scss';
import contactBackgroundImage from '../img/contactStock.jpeg';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function ContactPage() {
    return (
        <div id='contact-page'>
            <div
                className='contact-background-image'
                style={{
                    backgroundImage: `url(${contactBackgroundImage})`,
                }}
            >
                <Container fluid className='text-box-blue'>
                    <Container>
                        <h1>
                            Contact Us
                        </h1>
                    </Container>
                </Container>
            </div>
            <Container fluid className='text-box-white'>
                <Container>
                    <h2>
                        Free & Paid Consultations
                    </h2>
                    <p>
                        Free consultations are 15 minutes by phone to determine if your case is something we
                        handle and to answer general legal questions, not to provice a case-specific analysis. 
                        You can also book a paid appointment at the office.  Consultation fees are
                        payable at the time of the appointment. Please note that all appointments are subject
                        to a conflicts check (required by law) and may need to be moved in the event of a
                        scheduling conflict not correctly indicated on the automatic scheduling calendar.
                        Appointments for new clients are generally available on Mondays, Tuesdays, and 
                        Thursdays, or on other daysby special request.
                    </p>
                    <p>
                        We <u>DO NOT</u> accept cases concerning:
                    </p>
                    <ul>
                        <li>
                            Criminal law
                        </li>
                        <li>
                            Pro bono / Contingency
                        </li>
                        <li>
                            Residential landlord-tenant (e.g. problems with your apartment landlord)
                        </li>
                        <li>
                            Personal injury or workers compensation
                        </li>
                        <li>
                            Small claims court
                        </li>
                        <li>
                            Estate planning or family law (divorce and child custody)
                        </li>
                    </ul>
                    <p>
                        <i>
                            Making an appointment does not create an attorney-client relationship which requires
                            a conflicts check, case evaluation, a signed attorney-client agreement, and typically
                            payment of a retainer. When scheduling an appointment, please include the names of all
                            other parties for a conflicts check. Do NOT include sensitive or confidential information
                            until a conflicts check has been completed.
                        </i>
                    </p>
                    <Button className='call-to-action' href='https://lawofficesofcathycowin.cliogrow.com/book'>
                        Schedule An Appointment
                    </Button>
                    <hr />
                    <h2>
                        Contact Cathy
                    </h2>
                    <p>
                        Phone:&nbsp;
                        <a href='tel:559-570-3647'>
                            (559) 570-3647
                        </a>
                    </p>
                    <p>
                        Email:&nbsp;
                        <a href='mailto:cathy@attorneycathycowin.com'>
                            cathy@attorneycathycowin.com
                        </a>
                    </p>
                    <h2>
                        Our Location
                    </h2>
                    <p>
                        <a href='https://maps.app.goo.gl/RySGrwfUPEkrLMH87'>
                            7600 N Ingram Ave, Suite 102, <br />
                            Fresno, California 93711
                        </a>
                    </p>
                    <GoogleMapEmbed />
                    <hr />
                    <h2>
                        Leave a review
                    </h2>
                    <ButtonGroup>
                        <Button
                            className='call-to-action'
                            href='https://www.google.com/url?q=https%3A%2F%2Fwww.yelp.com%2Fwriteareview%2Fbiz%2FJceVJmsAiXRGoUiRlOm1_g%3Freturn_url%3D%252Fbiz%252FJceVJmsAiXRGoUiRlOm1_g%26review_origin%3Dreview-feed-war-widget&sa=D&sntz=1&usg=AOvVaw2L2pAYa50mTKd93y_ylXHh'
                        >
                            Yelp!
                        </Button>
                        &nbsp;
                        <Button
                            className='call-to-action'
                            href='https://g.page/r/CbDNdor2XVntEBM/review'
                        >
                            Google Reviews
                        </Button>
                    </ButtonGroup>
                </Container>
            </Container>
        </div>
    );
}

function GoogleMapEmbed() {
    return (
        <Container>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6385.5131207659415!2d-119.80127840000002!3d36.84830590000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80946817783a8ecb%3A0x8cd5fa77adab2d17!2s7600%20N%20Ingram%20Ave%2C%20Fresno%2C%20CA%2093711!5e0!3m2!1sen!2sus!4v1723532397054!5m2!1sen!2sus"
                title='Google Maps'
                width="100%"
                height="400px"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            />
        </Container>
    );
}

export default ContactPage;