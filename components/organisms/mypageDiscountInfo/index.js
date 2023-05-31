import { MypageDiscountInfoDiv } from './style';

import Title from '@molecules/title';
import InlineText from '@molecules/inlineText';
import ImageText from '@molecules/imageText';

const MypageDiscountInfo = () => {
    return (
        <MypageDiscountInfoDiv>
            <Title text="최근 받은 할인" />
            <InlineText textOne="권낙현님" textTwo="할인금액" textOneClassName="mypageUserName" textTwoClassName="mypageMoneyTitle" />
            <ImageText text="15000" src="images/coin.svg" alt="images/coin.svg" textClassName="mypageMoneyTotal" />
        </MypageDiscountInfoDiv>
    );
};

export default MypageDiscountInfo;