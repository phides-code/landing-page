import styled from 'styled-components';
import LandingText from './LandingText';
import DesktopAppScreenShot from './DesktopAppScreenshot';

const DesktopPageBody = () => {
    return (
        <Wrapper>
            <LandingText />
            <DesktopAppScreenShot />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default DesktopPageBody;
