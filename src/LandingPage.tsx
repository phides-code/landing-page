import DesktopLandingPage from './DesktopLandingPage';

interface LandingPageProps {
    isMobile: boolean;
}

const LandingPage = ({ isMobile }: LandingPageProps) => {
    console.log('isMobile: ', isMobile);
    return <DesktopLandingPage />;
};

export default LandingPage;
