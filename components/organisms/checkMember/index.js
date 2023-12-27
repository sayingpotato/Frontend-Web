import { CheckMemberDiv } from "./style"

import Text from "@atoms/text"
import Button from "@atoms/button"

const CheckMember = ({ onClickRegisterButton }) => {
    return (
        <CheckMemberDiv>
            <Text text="회원이 아니신가요?" className="checkMemberText"/>
            <Button onClick={onClickRegisterButton} text="회원가입" className="checkMemberButton" />
        </CheckMemberDiv>
    )
}

export default CheckMember