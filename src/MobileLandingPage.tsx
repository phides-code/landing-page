import styled from 'styled-components';
import MobileHeader from './MobileHeader';
import LandingText from './LandingText';
import MobileAppScreenShot from './MobileAppScreenshot';

const MobileLandingPage = () => {
    return (
        <Wrapper>
            <MobileHeader />
            <LandingText />
            <MobileAppScreenShot />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    margin: 0 1.6rem;
`;

export default MobileLandingPage;
