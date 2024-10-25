import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { isMobile } from 'react-device-detect';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";

import businessSymbol from '../img/business.svg';
import litigationSymbol from '../img/litigation.svg';
import businessFormationSymbol from '../img/business_formation.svg';
import contractDraftingSymbol from '../img/contract_draft.svg';
import realEstateSymbol from '../img/real_estate.svg';
import agricultureSymbol from '../img/agriculture.svg';
import mediationSymbol from '../img/mediation.svg';
import businessFraudSymbol from '../img/business_fraud.svg';
import businessSaleSymbol from '../img/business_sale.svg';

function businessDescription() {
    return (
        <>
            Representing local businesses since 1991, Cathy has a B.S.in
            Business and an M.B.A. with an emphasis in Organizational Psychology. Running a business can
            be challenging. We find that many business owners don't seek legal representation soon enough
            - when the attorney could save you money or keep you out of court. Wouldn't it be nice to have
            someone you could call with the tough questions? Someone that would come alongside to look
            after your best interests and save you from undue liability? We're here to help.
        </>
    );
}

function litigationDescription() {
    return (
        <>
            If settlement is unsuccessful, a more aggressive approach becomes necessary. We can navigate
            your case through the complexities of the court system with a thoughtful, goal-oriented, and
            economical approach.
        </>
    );
}

function businessFormationDescription() {
    return (
        <>
            I love working with small business owners and learning the details about what my clients do. In
            the transactional side of my practice, I enjoy working with businesses at all stages, from
            entity formation and setting up good business practices to the challenges of running a successful
            business, including analyzing contracts/leases, protecting intellectual property, and avoiding
            liability.
        </>
    );
}

function contractDraftingDescription() {
    return (
        <>
            Business conflicts arise when you lack a good roadmap for disputes before they happen. A well-written
            contract can help you navigate relational turbulence and avoid liability. If you already have
            a contractual situation gone bad, we can help analyze your best options to reach a satisfactory
            resolution.
        </>
    );
}

function realEstateDescription() {
    return (
        <>
            Real estate law is complex. Its not a do-it-yourself task. Failure to understand all the implications
            of a transaction could have unintended and detrimental results. Let us help you with your purchase contract
            review, lease analysis, or real estate lawsuit.
        </>
    );
}

function agricultureDescription() {
    return (
        <>
            Rooted in a family farming background, we've been representing farm clients since 1991.
            We're familiar with the challenges of agri-business. You're not just growing crops, you're running
            a sophisticated business requiring accounting, insurance, and scientific skills as well as business
            acumen. We can help you navigate the complexities, keeping economics in mind.
        </>
    );
}

function mediationDescription() {
    return (
        <>
            In my more than thirty years as a practicing attorney, I've used my M.B.A. emphasis in
            organizational psychology as much as my law degree in achieving client outcomes. Mediation
            can be a conflict resolution process significantly less expensive or time consuming than the court
            system. Having completed significant hours of mediation training, acted as a volunteer mediator
            for the Fresno Superior Court, and as a paid mediator for various cases, I find helping people find
            resolutions to their legal matters very rewarding.
        </>
    );
}

function businessFraudDescription() {
    return (
        <>
            When you've been financial damaged by someone's lies or because someone concealed important information, we're
            here to help. In more than thirty years, we've encountered and responded to a wide array of
            schemes and pursued economic recovery including punitive damages against the wrongdoers.
        </>
    );
}

function businessSaleDescription() {
    return (
        <>
            We can walk you through the purchase or sale of a business, including stock purchase
            agreements, LLC membership transfers, and asset transfer agreements
        </>
    );
}

function Practice(props) {
    var alternateText = props.title + ' icon';
    return (
        <Card className='practice-slide'>
            <Card.Img
                variant='top'
                src={props.symbol}
                alt={alternateText}
            />
            <Card.Body>
                <Card.Title>
                    <b role='heading' aria-level="2">
                        {props.title}
                    </b>
                </Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function PracticesList(props) {
    const practices = [
        {
            id: 0,
            title: 'Business Litigations & Transactions',
            symbol: businessSymbol,
            description: businessDescription()
        },

        {
            id: 1,
            title: 'General Civil Litigation',
            symbol: litigationSymbol,
            description: litigationDescription()
        },

        {
            id: 2,
            title: 'Formation of Business Entities',
            symbol: businessFormationSymbol,
            description: businessFormationDescription()
        },

        {
            id: 3,
            title: 'Contract Drafting & Review',
            symbol: contractDraftingSymbol,
            description: contractDraftingDescription()
        },

        {
            id: 4,
            title: 'Real Estate Law',
            symbol: realEstateSymbol,
            description: realEstateDescription()
        },

        {
            id: 5,
            title: 'Agricultural Law & Ag Insurance',
            symbol: agricultureSymbol,
            description: agricultureDescription()
        },

        {
            id: 6,
            title: 'Mediation/Arbitration',
            symbol: mediationSymbol,
            description: mediationDescription()
        },

        {
            id: 7,
            title: 'Business Fraud',
            symbol: businessFraudSymbol,
            description: businessFraudDescription()
        },

        {
            id: 8,
            title: 'Sale/Purchase of Business',
            symbol: businessSaleSymbol,
            description: businessSaleDescription()
        }
    ];

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [slideContentCount, setSlideContentCount] = useState(viewportWidth);

    useEffect(() => {
        setSlideContentCount(
            viewportWidth >= 992 ? 3 :
                viewportWidth >= 768 ? 2 :
                    1
        );
    }, [viewportWidth]);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slideContentCount,
        slidesToScroll: 1,
    }
    if (!isMobile) {
        settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 7000,
            pauseOnHover: true,
            speed: 500,
            slidesToShow: slideContentCount,
            slidesToScroll: 1,
        }
    }
    return (
        <Slider {...settings} aria-label="Practices List Slider">
            {practices.map((practice) => {
                return (
                    <Practice
                        practiceId={practice.id}
                        title={practice.title}
                        symbol={practice.symbol}
                        description={practice.description}
                    />
                );
            })}
        </Slider>
    );
}

export default PracticesList;