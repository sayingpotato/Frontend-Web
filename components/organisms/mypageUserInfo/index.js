import { MypageUserInfoDiv } from './style';

import Text from '@atoms/text';
import Title from '@molecules/title';
import ImageText from '@molecules/imageText';

const MypageUserInfo = () => {
    return (
        <MypageUserInfoDiv>
            <Title text="권낙현님" className="mypageName" />
            <div>
                <Text text="할인 금액" className="mypageMoneyTitle" />
                <ImageText imageClassName="mypageMoneyIcon" divClassName="basic" text="15000" src="images/coin.svg" alt="images/coin.svg" textClassName="mypageMoneyTotal" />
            </div>
        </MypageUserInfoDiv>
    );
};

export default MypageUserInfo;