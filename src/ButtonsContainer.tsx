import styled from 'styled-components';
import { PrimaryColor } from './theme';

const ButtonsContainer = () => {
    return (
        <Wrapper>
            <StyledButton>Log In</StyledButton>
            <StyledButton>Sign Up</StyledButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledButton = styled.button`
    font-size: medium;
    font-weight: bold;
    height: 2.5rem;
    width: 7rem;
    margin: 0 0.5rem;
    border: none;
    background-color: ${PrimaryColor};
    border-radius: 10px;
`;

export default ButtonsContainer;
