import styled from 'styled-components';
import appScreenshot from './assets/app-screenshot.png';

const DesktopAppScreenShot = () => {
    return (
        <Wrapper>
            <AppScreenShotImg src={appScreenshot} alt='app screenshot' />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    flex: 1.5;
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;
const AppScreenShotImg = styled.img`
    height: 42rem;
`;

export default DesktopAppScreenShot;
