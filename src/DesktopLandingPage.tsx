import styled from 'styled-components';
import Header from './Header';
import DesktopPageBody from './DesktopPageBody';

const DesktopLandingPage = () => {
    return (
        <Wrapper>
            <Header />
            <DesktopPageBody />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    margin: 0 7.3rem;
`;

export default DesktopLandingPage;
