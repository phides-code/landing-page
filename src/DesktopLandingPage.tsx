import styled from 'styled-components';
import Header from './Header';

const DesktopLandingPage = () => {
    return (
        <Wrapper>
            <Header />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    margin: 0 4rem;
`;

export default DesktopLandingPage;
