import styled from 'styled-components';
import LandingText from './LandingText';
import AppScreenShot from './AppScreenshot';

const DesktopPageBody = () => {
    return (
        <Wrapper>
            <LandingText />
            <AppScreenShot />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default DesktopPageBody;
