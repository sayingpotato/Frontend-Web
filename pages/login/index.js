import Back from "@components/back";
import SignUp from "@components/signUp";
import { 
    Input,
    Main,
    LoginComponent,
    LoginButton,
    RegisterButton,
    Find,
    RegisterComponent } from "./style";
import Line from "@components/line";

const Login = () => {
    return (
        <>
            <Back/>
            <SignUp 
                title={'LOG IN'}
                subTitle={'로그인이 필요한 서비스입니다'}/>
            <LoginComponent>
                <Main>
                    <Input
                        placeholder='ID'/>
                    <Input
                        type='password'
                        placeholder='PW'/>
                    <LoginButton>
                        로그인
                    </LoginButton>
                    <Find>
                        <p>아이디 찾기</p>
                        <p>비밀번호 찾기</p>
                    </Find>
                </Main>
            </LoginComponent>
            <Line/>
            <RegisterComponent>
                <p>회원이 아니신가요?</p>
                <RegisterButton>회원가입</RegisterButton>
            </RegisterComponent>
        </>
    )
}

Login.Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

Login.Layout.displayName = 'LoginLayout';

export default Login