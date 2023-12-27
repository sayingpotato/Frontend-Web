import { Main } from './style';

import Input from "@atoms/input"
import Button from "@atoms/button";
import InlineButton from "@molecules/inlineButton";

const MemberContent = ({ state, onChangeId, onChangePw, onClickLoginButton }) => {
    return (
        <>
            <Main>
                <Input
                    onChange={onChangeId}
                    placeholder='ID'
                    className="memberInput"
                    />
                <Input
                    onChange={onChangePw}
                    type='password'
                    placeholder='PW'
                    className="memberInput"
                    />
                <Button state={state} onClick={onClickLoginButton} text="로그인" style="loginButton" />
                <InlineButton textOne="아이디 찾기" textTwo="비밀번호 찾기" divClassName="find" />
            </Main>
        </>
    )
}

export default MemberContent