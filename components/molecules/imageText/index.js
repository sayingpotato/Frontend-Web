import { StyledImageTextDiv } from './style';

import Text from "@atoms/text"
import Image from "@atoms/image"

const ImageText = ({src, alt, text, TextClass}) => {
    return (
        <StyledImageTextDiv>
            <Image src={src} alt={alt}/>
            <Text text={text} className={TextClass}/>
        </StyledImageTextDiv>
    );
};

export default ImageText;