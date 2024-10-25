import './BusinessPage.scss';
import businessBackgroundImage from '../img/businessPageStock.jpeg';
import Container from 'react-bootstrap/Container';

function BusinessPage() {
    return (
        <div id='business-page'>
            <div
                className='business-background-image'
                style={{
                    backgroundImage: `url(${businessBackgroundImage})`,
                }}
                aria-label="Business Page Banner"
            >
                <Container fluid className='text-box-blue'>
                    <Container>
                        <h1>
                            Business Law
                        </h1>
                        <h3>
                            Representing local businesses since 1991
                        </h3>
                    </Container>
                </Container>
            </div>
            <Container fluid className='text-box-white' aria-label="Business Page Content">
                <Container>
                    <p>
                        Running a business can be challenging. We find that many business owners don't
                        seek legal representation soon enough - when the attorney could save you money
                        or keep you out of court. Wouldn't it be nice to have someone you could call
                        with the tough questions? Someone that would come alongside to look after your
                        best interests and save you from undue liability? We're here to help.
                    </p>
                    <p>
                        We have experience in:
                    </p>
                    <ul>
                        <li>
                            Business litigation
                        </li>
                        <li>
                            Formation of business entities (partnerships, LLCs, and corporations)
                        </li>
                        <li>
                            Purchase or sale of business
                        </li>
                        <li>
                            Business fraud
                        </li>
                        <li>
                            Contract drafting and analysis
                        </li>
                        <li>
                            Unfair competition
                        </li>
                        <li>
                            Commercial leases
                        </li>
                        <li>
                            Distribution and licensing agreements
                        </li>
                        <li>
                            Real property law
                        </li>
                    </ul>
                    <h2>
                        We're here to meet your goals
                    </h2>
                    <p>
                        If you come to my office for an appointment, expect to be asked, "What is your
                        goal?" It's incredibly important that the attorney and client are on the same
                        page and have a clear understanding of the desired outcome, particularly
                        concerning business disputes. This equally applies to the economics associated
                        with legal representation.
                    </p>
                    <h2>
                        Avoiding unnecessary business disputes & "Relationship Insurance"
                    </h2>
                    <p>
                        Business conflicts can come from the outside or from the inside (usually the
                        first significant money earned or lost). It's important to have a good roadmap
                        for disputes before they happen. For outside disputes, that may be a well-written
                        contract. For internal disputes, that may mean a good plan to address what happens
                        when there's a disagreement. Two individuals came to me once saying they were best
                        friends and so they wanted a cheap, short partnership that would be no more than
                        two pages long. Of course, that's not a good partnership agreement, but they were
                        serious! I told them "Sure, but would you also like some additional pages that I
                        refer to as Relationship Insurance?" It took them a minute before they took in my
                        point. Having a good roadmap for when things don't go as planned can be what keeps
                        you best friends.
                    </p>
                    <h2>
                        Ways that conflicts get resolved
                    </h2>
                    <p>
                        If you do end up in a serious dispute, there are only four ways that people resolve 
                        disputes: (1) negotiation (i.e. talk it out and come to an agreement), (2) take your 
                        beef out to the alley and the last one standing is the winner (i.e. the strongest 
                        wins...and in protracted litigation, this could mean the one with the biggest war 
                        chest), (3) court or binding arbitration (i.e. you give a third party the power to 
                        decide for you), and (4) mediation (i.e. a third party helps you mutually resolve the 
                        conflict). Sometimes, court is the right answer, but mediation is often an excellent 
                        option (even after a case has been filed) because it is faster and less expensive than 
                        court. While it only works if both sides are willing to enter into the process (and 
                        both parties retain the right to walk away at any time), statistics show an 80% 
                        satisfaction rate regarding a mediated outcome. If mediation is unsuccessful, then 
                        there's a clear signal that litigation must be more aggressive.
                    </p>
                </Container>
            </Container>
        </div>
    );
}

export default BusinessPage;