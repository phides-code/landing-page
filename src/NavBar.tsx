import styled from 'styled-components';
import { PrimaryColor } from './theme';
import { NavLinks } from './navlinks';

const NavBar = () => {
    return (
        <Wrapper>
            {NavLinks.map((navLink) => (
                <StyledNavLink key={navLink.name}>{navLink.name}</StyledNavLink>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    width: 100%;
`;

const StyledNavLink = styled.span`
    font-weight: bold;
    font-size: 1.125rem;
    &:hover {
        color: ${PrimaryColor};
    }
`;

export default NavBar;
