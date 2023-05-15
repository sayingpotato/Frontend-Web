import { StyledInlineButtontDiv } from './style';
import Button from "@atoms/button"

const InlineButton = ({text1, text2, text1ClassName, text2ClassName}) => {
    return (
        <StyledInlineButtontDiv>
            <Button text={text1} className={text1ClassName}/>
            <Button text={text2} className={text2ClassName}/>
        </StyledInlineButtontDiv>
    );
};

export default InlineButton;