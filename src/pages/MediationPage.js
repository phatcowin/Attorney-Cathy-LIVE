import './MediationPage.scss';
import mediationBackgroundImage from '../img/mediationStock.jpeg';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function MediationPage() {
    return (
        <div id='mediation-page'>
            <div
                className='mediation-background-image'
                style={{
                    backgroundImage: `url(${mediationBackgroundImage})`,
                }}
                aria-label="Mediation Page Banner"
            >
                <Container fluid className='text-box-blue'>
                    <Container>
                        <h1>
                            Mediation
                        </h1>
                    </Container>
                </Container>
            </div>
            <Container fluid className='text-box-white' aria-label="Mediation Page Content">
                <Container>
                    <h2>
                        Mediation Services
                    </h2>
                    <p>
                        There are only four ways that people resolve disputes: (1) the strongest
                        wins, (2) privately negotiate and agree, (3) let someone else decide, such
                        as a judge, or (4) have a third party help facilitate a resolution.
                        Mediation is that fourth method. It's a voluntary process, so you're not
                        handing your decision-making authority to someone like a judge. It has a
                        nearly 80% satisfaction rate. It is much more timely and cost effective
                        than going to court.
                    </p>
                    <p>
                        Every dispute has two parts: (1) the thing you're in disagreement about and
                        (2) the people/relationships involved. Courts are great at deciding things,
                        but not so great at solving feelings or relationships. This may explain why
                        most people that win at court still aren't really satisfied with the outcome.
                        Mediation presents an opportunity to uncover a resolution that resolves all
                        aspects of a dispute.
                    </p>
                    <p>
                        In my more than thirty years as a practicing attorney, I've used my M.B.A. 
                        emphasis in organizational psychology as much as my law degree in achieving 
                        client outcomes. I have also completed significant hours of mediation training, 
                        acted as a volunteer mediator for the Fresno Superior Court, and as a paid 
                        mediator for various cases. I find helping people find resolutions to their 
                        legal matters very rewarding.
                    </p>
                    <h2>
                        Rates:
                    </h2>
                    <ul>
                        <li>
                            $1,200 Half Day (including 2 hours of prep time)
                        </li>
                        <li>
                            $1,800 Full Day (including 2 hours of prep time)
                        </li>
                        <li>
                            Additional hours at $295/hour
                        </li>
                    </ul>
                    <Button className='call-to-action' href='https://lawofficesofcathycowin.cliogrow.com/book'>
                        Reserve A Mediation Date
                    </Button>
                </Container>
            </Container>
        </div>
    );
}

export default MediationPage;