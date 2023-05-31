import { MypageUserInfoDiv } from './style';

import InlineText from '@molecules/inlineText';
import ImageText from '@molecules/imageText';

const MypageUserInfo = () => {
    return (
        <MypageUserInfoDiv>
            <InlineText textOne="권낙현님" textTwo="할인금액" textOneClassName="mypageUserName" textTwoClassName="mypageMoneyTitle" />
            <ImageText text="15000" src="images/coin.svg" alt="images/coin.svg" textClassName="mypageMoneyTotal" />
        </MypageUserInfoDiv>
    );
};

export default MypageUserInfo;