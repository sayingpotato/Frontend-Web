import { useEffect, useState } from "react";
import Router from "next/router";
import { TotalLogin } from "@styles/login/style";
import useLogin from "@hooks/useLogin";
import Line from "@atoms/line";
import Image from "@atoms/image";
import MemberTitle from "@organisms/memberTitle";
import MemberContent from "@organisms/memberContent";
import CheckMember from "@organisms/checkMember";

const Login = () => {
    const [state, setState] = useState(false);
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [post, setPost] = useState(0);
    const login = useLogin(inputId, inputPw);

    useEffect(() => {
        if (!post) return ;
        login();
    }, [post]);
    
    useEffect(() => {
        if (inputId && inputPw) {
            setState(true);
            return;
        }
        setState(false);
    },[inputId, inputPw])

    const onChangeId = (e) => {
        setInputId(e.target.value);
    }
    
    const onChangePw = (e) => {
        setInputPw(e.target.value);
    }

    const onClickLoginButton = () => {
        setPost(post + 1);
    }

    const onClickRegisterButton = () => {
        Router.push('/register/auth/self');
    }

    const onClickBack = () => {
        Router.back();
    }
    
    return (
        <TotalLogin>
            <Image src="images/back.svg" alt="뒤로 가기" className="backArrowImage" onClick={onClickBack} width={42} height={42} />
            <MemberTitle 
                title={'LOG IN'}
                subTitle={'로그인이 필요한 서비스입니다'} />
            <MemberContent state={state} onChangeId={onChangeId} onChangePw={onChangePw} onClickLoginButton={onClickLoginButton} />
            <Line className="memberLine" />
            <CheckMember onClickRegisterButton={onClickRegisterButton} />
        </TotalLogin>
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