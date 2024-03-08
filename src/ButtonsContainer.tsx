import styled from 'styled-components';
import { PrimaryColor } from './theme';

const ButtonsContainer = () => {
    return (
        <Wrapper>
            <LoginSignupButton>Log In</LoginSignupButton>
            <Gap />
            <LoginSignupButton>Sign Up</LoginSignupButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LoginSignupButton = styled.button`
    font-size: 1.25rem;
    font-weight: 700;
    height: 3.375rem;
    width: 8.25rem;
    border: none;
    background-color: ${PrimaryColor};
    border-radius: 10px;
`;

const Gap = styled.div`
    width: 0.8rem;
`;

export default ButtonsContainer;
