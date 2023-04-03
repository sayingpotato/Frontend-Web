import styled from "styled-components";

const LoginComponent = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
`;

const Input = styled.input`
    width: 264px;
    border-radius: 16px;
    padding: 20px;
    border: none;
    background-color: #F4F4F4;

    :focus {
        outline: none;
    }

    ::placeholder {
        font-family: 'Pretendard Variable'
        font-weight: 600;
    }
`;

const LoginButton = styled.button`
    width: 304px;
    border-radius: 16px;
    padding: 18px 24px 18px 24px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 12px;
    border: none;
    background-color: #B0B0B0;
    color: white;
`;

const RegisterComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    p {
        color: #7B7B7B;
        font-weight: 500;
        margin:14px;
    }
`;

const RegisterButton = styled(LoginButton)`
    background-color: white;
    color: #747474;
    border: 1px solid #7B7B7B;
`;

const Find = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: #7B7B7B;
    margin-bottom: 24px;
    font-size: 14px;
`;
export {LoginComponent, Main, Input, LoginButton, RegisterButton, Find, RegisterComponent}