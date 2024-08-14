import './RealEstatePage.scss';
import realEstateBackgroundImage from '../img/realestate_page.jpeg';
import Container from 'react-bootstrap/Container';

function RealEstatePage() {
    return (
        <div className="realestate-page">
            <div
                className='realestate-background-image'
                style={{
                    backgroundImage: `url(${realEstateBackgroundImage})`,
                }}
            >
                <Container fluid className='text-box-blue'>
                    <Container>
                        <h1>
                            Real Estate Law
                        </h1>
                        <h3>
                            Representing real estate clients since 1991
                        </h3>
                    </Container>
                </Container>
            </div>
            <Container fluid className='text-box-white'>
                <Container>
                    <p>
                        Real estate law is one of the most complex areas of law. It's definitely not a 
                        do-it-yourself task. By way of example, I'll often have a potential client contact 
                        me wanting a simple quitclaim deed to remove someone from ownership. It's (almost) 
                        never that simple. Filing that so-called simple change of ownership without 
                        understanding all of the implications could have unintended and detrimental 
                        results. The same goes for real estate purchases where simple changes to a 
                        contract could have significant impacts. Often, having a lawyer review a contract 
                        before you sign it can avoid the big legal fees that could result in the event of a 
                        later dispute.
                    </p>
                    <p>
                        We have experience with:
                    </p>
                    <ul>
                        <li>
                            Review of real estate transactions & escrow issues
                        </li>
                        <li>
                            Commercial leases
                        </li>
                        <li>
                            Real property disputes
                        </li>
                        <li>
                            Real estate purchases and sales
                        </li>
                        <li>
                            Real estate litigation matters
                        </li>
                        <li>
                            Real estate contracts
                        </li>
                        <li>
                            Easements
                        </li>
                        <li>
                            Trespass
                        </li>
                        <li>
                            Property border disputes & encroachments
                        </li>
                        <li>
                            Fraudulent transactions
                        </li>
                        <li>
                            Promissory notes
                        </li>
                    </ul>
                    <p>
                        <i>
                            Note: We do not handle residential or commercial eviction cases or represent
                            apartment tenants.
                        </i>
                    </p>
                </Container>
            </Container>
        </div>
    );
}

export default RealEstatePage;