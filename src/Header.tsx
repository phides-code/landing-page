import styled from 'styled-components';
import logo from './assets/logo.png';
import NavBar from './NavBar';
import ButtonsContainer from './ButtonsContainer';

const Header = () => {
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
    margin: 1rem 0;
`;
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 2rem;
    width: 2rem;
`;

export default Header;
