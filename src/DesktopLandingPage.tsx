import styled from 'styled-components';
import DesktopHeader from './DesktopHeader';
import DesktopPageBody from './DesktopPageBody';

const DesktopLandingPage = () => {
    return (
        <Wrapper>
            <DesktopHeader />
            <DesktopPageBody />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    margin: 0 7.3rem;
`;

export default DesktopLandingPage;
