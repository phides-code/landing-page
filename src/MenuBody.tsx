import styled from 'styled-components';
import { NavLink, NavLinks } from './navlinks';
import { PrimaryColor } from './theme';

const MenuBody = () => {
    const menuButtons: NavLink[] = NavLinks.concat(
        {
            name: 'Log In',
            destination: '#',
        },
        {
            name: 'Sign Up',
            destination: '#',
        }
    );

    return (
        <Wrapper>
            {menuButtons.map((menuButton) => (
                <MobileMenuButton key={menuButton.name}>
                    {menuButton.name}
                </MobileMenuButton>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1.6rem 0 0.8rem;
`;

const MobileMenuButton = styled.a`
    display: flex;
    align-items: center;
    color: white;
    height: 3.313rem;
    font-size: 1.5rem;
    border-radius: 10px;
    padding: 0 0 0 0.8rem;
    &:hover {
        background-color: ${PrimaryColor};
        color: black;
    }
`;

export default MenuBody;
