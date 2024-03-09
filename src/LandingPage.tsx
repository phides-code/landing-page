import DesktopLandingPage from './DesktopLandingPage';
import MobileLandingPage from './MobileLandingPage';

interface LandingPageProps {
    isMobile: boolean;
}

const LandingPage = ({ isMobile }: LandingPageProps) => {
    return isMobile ? <MobileLandingPage /> : <DesktopLandingPage />;
};

export default LandingPage;
