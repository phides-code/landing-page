import styled from 'styled-components';
import xButton from './assets/x-button.png';
import { MobileMenuColor } from './theme';
import darkLogo from './assets/dark-logo.png';
import MenuBody from './MenuBody';

interface MobileMenuProps {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuContainer = ({ showMenu, setShowMenu }: MobileMenuProps) => {
    const open = showMenu.toString();
    return (
        <Wrapper $open={open}>
            <MenuHeader>
                <Logo src={darkLogo} alt='logo' />
                <a href='#' onClick={() => setShowMenu(false)}>
                    <XButton src={xButton} alt='close menu' />
                </a>
            </MenuHeader>
            <MenuBody />
        </Wrapper>
    );
};

interface StyledComponentProps {
    $open?: string;
}

const Wrapper = styled.div<StyledComponentProps>`
    position: fixed;
    background-color: ${MobileMenuColor};
    top: 0;
    right: ${(props) => (props.$open === 'true' ? '0' : '-100%')};
    height: 100%;
    width: 100%;
    transition: right 0.3s ease-in-out;
    z-index: 100;
`;

const MenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    margin: 2.5rem 1.6rem;
`;

const Logo = styled.img`
    height: 3rem;
`;

const XButton = styled.img`
    height: 1.625rem;
`;

export default MobileMenuContainer;
