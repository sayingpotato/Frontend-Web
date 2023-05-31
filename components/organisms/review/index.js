import PercentBlock from "@molecules/percentBlock"
import ImageText from "@molecules/imageText"

const Review = () => {
    return (
        <PercentBlock>
            <ImageText divClassName="basic" src="images/goldMedal.svg" alt="images/goldMedal.svg" text="리뷰명" TextClass="reviewName" inlineBlockClass="oneInside"/>
            <ImageText divClassName="basic" src="images/silverMedal.svg" alt="images/silverMedal.svg" text="리뷰명" TextClass="reviewName" inlineBlockClass="twoInside"/>
            <ImageText divClassName="basic" src="images/bronzeMedal.svg" alt="images/bronzeMedal.svg" text="리뷰명" TextClass="reviewName" inlineBlockClass="threeInside"/>
        </PercentBlock>
    );
};

export default Review;