import styled from 'styled-components';

const NavBar = () => {
    const navLinks = [
        {
            name: 'Features',
            destination: '#',
        },
        {
            name: 'Pricing',
            destination: '#',
        },
        {
            name: 'Help',
            destination: '#',
        },
        {
            name: 'Blog',
            destination: '#',
        },
        {
            name: 'About us',
            destination: '#',
        },
    ];
    return (
        <Wrapper>
            {navLinks.map((navLink) => (
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
    padding: 0 6.5rem;
`;

const StyledNavLink = styled.span`
    font-weight: bold;
    font-size: 1.125rem;
`;

export default NavBar;
