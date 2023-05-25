import { StyledImageTextDiv } from './style';

import Text from "@atoms/text"
import Image from "@atoms/image"

const ImageText = ({src, alt, text, textClass, divClassName}) => {
    return (
        <StyledImageTextDiv className={divClassName}>
            <Image src={src} alt={alt}/>
            <Text text={text} className={textClass}/>
        </StyledImageTextDiv>
    );
};

export default ImageText;