import { StyledStoreInfoDiv, StyledReviewInfoDiv, StyledImageTextWholeDiv } from './style';

import Text from "@atoms/text"
import ImageLayout from "@molecules/imageLayout"
import InlineText from "@molecules/inlineText"
import PercentBlock from "@molecules/percentBlock"
import ImageText from "@molecules/imageText"

const Store = () => {
    return (
        <div>
            <ImageLayout />
            <StyledStoreInfoDiv>
                <Text text="가게 이름" className="storeName" />
                <InlineText text1="최소 할인율" text1ClassName="minDiscount" text2="최대 할인율" text2ClassName="maxDiscount"/>
            </StyledStoreInfoDiv>
            <StyledReviewInfoDiv>
                <StyledImageTextWholeDiv>
                    <ImageText src="images/goldMedal.svg" alt="images/goldMedal.svg" text="메뉴명" TextClass="reviewMenuName"/>
                    <ImageText src="images/silverMedal.svg" alt="images/silverMedal.svg" text="메뉴명" TextClass="reviewMenuName"/>
                    <ImageText src="images/bronzeMedal.svg" alt="images/bronzeMedal.svg" text="메뉴명" TextClass="reviewMenuName"/>
                </StyledImageTextWholeDiv>
                <PercentBlock />
            </StyledReviewInfoDiv>
        </div>
    );
};

export default Store;