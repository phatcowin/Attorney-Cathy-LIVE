import Container from 'react-bootstrap/Container'
import './AboutPage.scss';
import aboutBackgroundImage from '../img/cathy_cowin_about.jpg'

function AboutPage() {
    return (
        <div id="about-page">
            <div
                className='about-background-image'
                style={{
                    backgroundImage: `url(${aboutBackgroundImage})`,
                }}
                aria-label="About Page Banner"
            >
                <Container fluid className='text-box-blue'>
                    <Container>
                        <h1>
                            About Cathy
                        </h1>
                    </Container>
                </Container>
            </div>
            <Container fluid className='text-box-white' aria-label="About Page Content">
                <Container>
                    <h2>
                        Personal
                    </h2>
                    <p>
                        I've been in practice since 1991. Most of my practice centers in some way around business law,
                        real property law, and agri-business law, but my background of experience in the law has been
                        diverse. I first earned a degree in Business with an option in Computer Applications & Systems.
                        This part of my education has served me well in understanding business clients. Next, I completed
                        an M.B.A. with a course emphasis in psychology. This has also served me well because every
                        conflict has two parts: (1) people and (2) things. While the law addresses the "thing," it's
                        equally important to address the people components driving a conflict. I find that I use conflict
                        resolution and psychology skills as much as legal skills. Finally, I completed my J.D. (law degree)
                        with a course emphasis on intellectual property and corporate/business law. (At this point, my
                        parents thought I would never finish my education!)
                    </p>
                    <p>
                        Although I studied law at Santa Clara University School of Law in the Bay Area, I am a Fresno
                        native. My undergrad and graduate studies were at CSU-Fresno. The Central Valley is also home to my
                        husband's family.
                    </p>
                    <p>
                        In my personal life, I am a budding fiction novelist and a classically trained pianist. I currently
                        play synthesizer (keyboards) for my local church where I enjoy developing custom sounds through my
                        computer system.
                    </p>
                    <h2>
                        Philosophy
                    </h2>
                    <p>
                        (1) I want to make sure I'm the right lawyer for you before making an in-office appointment.
                        If I'm not, I'll try to point you in the right direction.
                    </p>
                    <p>
                        (2) Explanation of legal processes should be in plain English.
                    </p>
                    <p>
                        (3) Clients need to remain informed about the legal process and the status of their matter.
                    </p>
                    <p>
                        (4) Goals matter. You can't reach the target unless you identify it clearly and both the
                        attorney and the client are on the same page.
                    </p>
                    <p>
                        (5) Economics/budgets need to be kept in mind. Just as you wouldn't expect to leave the
                        doctor's office worse off than when you came in, how each action plan benefits the client
                        needs to be carefully evaluated.
                    </p>
                    <p>
                        (6) There are times when you need aggressive representation. There are situations where
                        the dispute is best served through conflict de-escalation. An attorney needs to be sensitive
                        to both strategies and know when to engage in each.
                    </p>
                    <p>
                        Part of the fun of representing business and agri-business clients is learning about their
                        particular industry segments. I've gotten to know a bit about gas station representation,
                        trucking companies, hotshot trucking, load brokering, auto dealer flooring, fuel transportation,
                        commercial/residential solar, genetic seed manipulation, and beauty spas, just to name a few!
                        I view a business owner and attorney relationship as a type of partnership with the purpose
                        of maximizing success.
                    </p>
                </Container>
            </Container>
        </div>
    );
}

export default AboutPage;