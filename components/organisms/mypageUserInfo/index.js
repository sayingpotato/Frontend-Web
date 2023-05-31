import { MypageUserInfoDiv } from './style';

import InlineText from '@molecules/inlineText';
import ImageText from '@molecules/imageText';

const MypageUserInfo = () => {
    return (
        <MypageUserInfoDiv>
            <InlineText text1="권낙현님" text2="할인금액" text1ClassName="mypageUserName" text2ClassName="mypageMoneyTitle" />
            <ImageText text="15000" src="images/coin.svg" alt="images/coin.svg" textClass="mypageMoneyTotal" />
        </MypageUserInfoDiv>
    );
};

export default MypageUserInfo;