import { InfoDiv, RegexDiv } from './style';

import Text from '@atoms/text'
import Input from '@atoms/input';
import Image from '@atoms/image'
import Regex from '@organisms/regex';

const RegisterContentInfo = ({ type, text, inputOnChange, state, regexData, inputValue, onValidityChange }) => {
    const chooseImage = () => {
        switch (state) {
            case 0 : return "/images/emptyBlock.svg"
            case 1 : return "/images/close.svg"
            case 2 : return "/images/checkCircle.svg"
        }
    }

    return (
        <InfoDiv>
            <Text text={text} className="registerTitle" />
            <Input type={type} state={state} onChange={inputOnChange} className="registerInput" />
            <Image className="close" src={chooseImage()} alt="close" />
            {
                regexData && (
                    <RegexDiv>
                        {regexData.map((item, index) => {
                            return (
                                <Regex
                                    key={index}
                                    action={item}
                                    input={inputValue}
                                    onValidityChange={onValidityChange}
                                />
                            )
                        })}
                    </RegexDiv>
                )
            }
            
        </InfoDiv>
    )
}

export default RegisterContentInfo