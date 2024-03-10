import styled from 'styled-components';
import logo from './assets/logo.png';
import hamburgerLogo from './assets/hamburger-icon.png';

interface MobileHeaderProps {
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileHeader = ({ setShowMenu }: MobileHeaderProps) => {
    return (
        <Wrapper>
            <LogoContainer>
                <Logo src={logo} alt='logo' />
            </LogoContainer>
            <LogoContainer>
                <a href='#' onClick={() => setShowMenu(true)}>
                    <HamburgerLogo src={hamburgerLogo} alt='hamburger-logo' />
                </a>
            </LogoContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2.5rem 0;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    height: 3rem;
    width: 3rem;
`;

const HamburgerLogo = styled.img`
    height: 0.563rem;
`;

export default MobileHeader;
