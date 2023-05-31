import { StoreVisitorReviewDiv } from './style';

import Text from "@atoms/text"
import PercentBlock from '@molecules/percentBlock';
import ImageText from '@molecules/imageText';

const StoreVisitorReview = ({address, time, call, concent, rank}) => {
    return (
        <>
            <StoreVisitorReviewDiv>
                    <Text text="방문자 리뷰" className="storeDetailMiniTitle"/>
                    <PercentBlock>
                        <ImageText text="리뷰명1" textClass="reviewName" inlineBlockClass="oneVisitorReviewInside"/>
                        <ImageText text="리뷰명2" textClass="reviewName" inlineBlockClass="twoVisitorReviewInside"/>
                        <ImageText text="리뷰명3" textClass="reviewName" inlineBlockClass="threeVisitorReviewInside"/>
                        <ImageText text="리뷰명4" textClass="reviewName" inlineBlockClass="fourVisitorReviewInside"/>
                    </PercentBlock>
            </StoreVisitorReviewDiv>
        </>
    );
};

export default StoreVisitorReview;