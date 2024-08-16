import './AgriculturePage.scss';
import agricultureBackgroundImage from '../img/agriculture_page.jpeg';
import Container from 'react-bootstrap/Container';

function AgriculturePage() {
    return (
        <div id='agriculture-page'>
            <div
                className='agriculture-background-image'
                style={{
                    backgroundImage: `url(${agricultureBackgroundImage})`,
                }}
            >
                <Container fluid className='text-box-blue'>
                    <Container>
                        <h1>
                            Agricultural Law
                        </h1>
                        <h3>
                            You're not just growing crops, you're running a sophisticated business.
                        </h3>
                    </Container>
                </Container>
            </div>
            <Container fluid className='text-box-white'>
                <Container>
                    <h2>
                        Representing farm clients since 1991
                    </h2>
                    <p>
                        We're familiar with the challenges of agri-business.
                    </p>
                    <p>
                        You're not just growing crops, you're running a sophisticated business requiring
                        accounting, insurance, and scientific skills as well as business acumen. We can
                        help you navigate the complexities, keeping economics in mind.
                    </p>
                    <p>
                        We have experience in:
                    </p>
                    <ul>
                        <li>
                            Ag insurance matters, including crop insurance arbitration representation
                        </li>
                        <li>
                            Assistance with buying and selling farm properties
                        </li>
                        <li>
                            Farm leases
                        </li>
                        <li>
                            Water sharing agreements
                        </li>
                        <li>
                            Processor disputes
                        </li>
                        <li>
                            Chemical drift & pesticide cases
                        </li>
                        <li>
                            Real estate related farm issues
                        </li>
                    </ul>
                    <h2>
                        Experience rooted in family farming
                    </h2>
                    <p>
                        My family has been involved with farming in the San Joaquin Valley for two 
                        generations (almonds, vineyards, citrus, and peaches). I've represented farmers 
                        in processor disputes (almonds/walnuts) and crop insurance disputes 
                        (peaches/almonds/prunes/pistachios) and have experience drafting ag purchases, 
                        leases, and water-sharing agreements. During the drought, I was involved in a 
                        large case involving chemical drift that decimated several large vineyards and 
                        orchards. I've also worked with issues concerning apiaries and agribusiness fraud.
                    </p>
                </Container>
            </Container>
        </div>
    );
}

export default AgriculturePage;