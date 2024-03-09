import styled from 'styled-components';
import logo from './assets/logo.png';
import NavBar from './NavBar';
import ButtonsContainer from './ButtonsContainer';

const DesktopHeader = () => {
    return (
        <Wrapper>
            <LogoContainer>
                <Logo src={logo} alt='logo' />
            </LogoContainer>
            <NavBar />
            <ButtonsContainer />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2.5rem 0 4rem;
`;

const LogoContainer = styled.div`
    display: flex;
`;

const Logo = styled.img`
    height: 2.5rem;
    width: 2.5rem;
`;

export default DesktopHeader;
