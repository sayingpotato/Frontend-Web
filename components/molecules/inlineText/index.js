import { StyledInlineTextDiv } from './style';
import Text from "@atoms/text"

const InlineText = ({text1, text2, text1ClassName, text2ClassName}) => {
    return (
        <StyledInlineTextDiv>
            <Text text={text1} className={text1ClassName}/>
            <Text text={text2} className={text2ClassName}/>
        </StyledInlineTextDiv>
    );
};

export default InlineText;