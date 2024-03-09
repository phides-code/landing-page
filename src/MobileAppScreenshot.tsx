import styled from 'styled-components';
import appScreenshot from './assets/app-screenshot.png';

const MobileAppScreenShot = () => {
    return <AppScreenShotImg src={appScreenshot} alt='app screenshot' />;
};

const AppScreenShotImg = styled.img`
    margin: 3rem 0;
    max-width: 100%;
`;

export default MobileAppScreenShot;
