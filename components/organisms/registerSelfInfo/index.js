import { InfoDiv, AuthDiv } from './style';

import Text from '@atoms/text'
import Button from '@atoms/button'
import Image from '@atoms/image'

const RegisterSelfInfo = ({ buttonClick, state }) => {
    return (
        <InfoDiv>
            <Text text="휴대폰 인증" className="registerTitle" />
            <AuthDiv>
                <Button text="인증하기" onClick={buttonClick} className="authButton" />
                {state === 2 && <Image src="/images/checkCircle.svg" alt="right" className="right" />}
            </AuthDiv>         
        </InfoDiv>
    )
}

export default RegisterSelfInfo