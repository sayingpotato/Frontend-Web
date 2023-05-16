import { TodayDiscountContentDiv } from './style';

import ImageText from '@molecules/imageText';
import Image from '@atoms/image'
import Text from '@atoms/text';

const TodayDiscountContent = ({src, alt, text}) => {
    return (
        <TodayDiscountContentDiv>
            <Image src={src} alt={alt} className='todayDiscountLogoImage'/>
            <Text text={text} className='todayDiscountLogoName' />
        </TodayDiscountContentDiv>
    );
};

export default TodayDiscountContent;