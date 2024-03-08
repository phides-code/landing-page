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
                <StyledNavLink>{navLink.name}</StyledNavLink>
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
    padding: 0 3rem;
`;

const StyledNavLink = styled.span`
    font-weight: bold;
`;

export default NavBar;
