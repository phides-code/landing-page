import styled from 'styled-components';
import MobileHeader from './MobileHeader';
import LandingText from './LandingText';
import MobileAppScreenShot from './MobileAppScreenshot';
import { useState } from 'react';
import MobileMenuContainer from './MobileMenuContainer';

const MobileLandingPage = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <Wrapper>
            <MobileMenuContainer
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            <LandingPageWrapper>
                <MobileHeader setShowMenu={setShowMenu} />
                <LandingText />
                <MobileAppScreenShot />
            </LandingPageWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 1.6rem;
`;

const LandingPageWrapper = styled.div``;

export default MobileLandingPage;
