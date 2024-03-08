import styled from 'styled-components';
import { PrimaryColor } from './theme';
import downloadIcon from './assets/download-icon.svg';

const LandingText = () => {
    return (
        <Wrapper>
            <SmallText>START SAVING MONEY</SmallText>
            <BigText>Smart Credit Card For Your Daily Life.</BigText>
            <DownloadButton>
                Download
                <img src={downloadIcon} alt='download icon' />
            </DownloadButton>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

const SmallText = styled.div`
    color: ${PrimaryColor};
    font-size: 1.125rem;
`;
const BigText = styled.div`
    text-align: justify;
    font-size: 3.438rem;
    font-weight: 600;
    padding: 1rem 0 2rem;
`;

const DownloadButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    height: 4.125rem;
    width: 11.75rem;
    border: none;
    background-color: ${PrimaryColor};
    border-radius: 10px;
`;

export default LandingText;
