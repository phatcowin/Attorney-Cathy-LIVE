import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Disclaimers() {
    return (
        <Accordion flush className='disclaimers-accordion' defaultActiveKey='0'>
            <Container>
                <Accordion.Item eventKey='0' className='disclaimer'>
                    <Accordion.Header className='disclaimer-header'>
                        <h2>
                            Disclaimers
                        </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            The American Bar Association and the State of California Rules
                            of Professional Conduct requires that we provide certain
                            disclaimers relating to our services:
                        </p>

                        <p>
                            NO LEGAL ADVICE WITHOUT CONSULTATION: No legal
                            advice is being provided through this website. Any newsletters,
                            blogs, webpages or similar materials are for informational purposes
                            only and provide only general legal information. Consult with a
                            professional regarding application to your personal situation.
                            Attorneys are not permitted to provide any guarantee or
                            prediction of outcomes, which are dependent on a variety of factors
                            specific to your situation.
                        </p>

                        <p>
                            NO PRIVACY/CONFIDENTIALITY: DO NOT send our
                            attorneys any personal information via email or text without first
                            obtaining authorization. All matters are first subject to a conflicts
                            check and we require the names of all persons/entities involved
                            prior to discussing details. If you provide personal or confidential
                            information prior to obtaining a conflicts check clearance, we have
                            no duty to keep that information private and undertake no duty to
                            represent you.
                        </p>

                        <p>
                            REPRESENTATION REQUIRES A SIGNED AGREEMENT:
                            Sending information to our attorneys or speaking to an attorney in
                            a free consultation does not form a duty of representation.
                            We are retained only after you sign an attorney-client agreement.
                        </p>

                        <p>
                            CALIFORNIA ONLY: Our attorneys are licensed only in
                            California and all information provided by this website, by email,
                            or by phone is only applicable to matters in the State of California.
                            We do not provide any type of legal advice outside of the State of
                            California.
                        </p>

                        <p>
                            LAWYER ADVERTISING: This website may be considered
                            lawyer advertising. Hiring an attorney is an important decision
                            that should not be based solely on the information provided on this
                            website. Information  on this website is for informational purposes
                            only, is provided without warranty, and is not guaranteed to be
                            up-to-date or complete.  No information, client reviews, or
                            testimonials provided on this websites or any links, including but
                            not limited to Yelp, Google, and Avvo, are considered a guarantee
                            of performance or prediction relating to any legal matter.
                        </p>

                        <p>
                            DESIGNATED ATTORNEY: Professional rules require us to
                            designate an atttorney responsible for this website. Our designated
                            attorney is Cathy Cowin (cathy.cowin@gmail.com).
                        </p>

                        <p>
                            NO SPECIALIZATION: Professional rules allow attorneys to
                            state primary areas of practice but not specialties unless
                            specifically licensed. Our firm does not hold any special licenses.
                            We primarily practice in the areas listed on this website. We do not
                            provide tax advice. Just like finding the right doctor means you
                            may need a pediatrician, oncologist, or gastroenterologist, finding
                            the right attorney means finding someone that routinely handles
                            the type of matter you need.
                        </p>

                        <p>
                            NO PRO BONO OR CONTINGENCY CASES: We do not
                            accept representation of clients pro bono (free) or on contingency.
                            All cases are billed on an hourly basis. A retainer is generally
                            required. Retainer funds are maintained in an attorney trust
                            account until earned. If a matter is closed and funds remain in trust,
                            a refund is issued. Matters may require additional retainer deposits.
                        </p>

                        <p>
                            We reserve the right to change these disclaimers at any time
                            without notice.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Container>
        </Accordion>
    );
}

export default Disclaimers;