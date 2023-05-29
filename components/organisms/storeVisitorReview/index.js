import { StoreVisitorReviewDiv } from './style';

import Text from "@atoms/text"
import PercentBlock from '@molecules/percentBlock';
import ImageText from '@molecules/imageText';

const StoreVisitorReview = ({address, time, call, concent, rank}) => {
    return (
        <>
            <StoreVisitorReviewDiv>
                    <Text text="방문자 리뷰" />
                    <PercentBlock>
                        <ImageText text="리뷰명" TextClass="reviewName" inlineBlockClass="oneVisitorReviewInside"/>
                        <ImageText text="리뷰명" TextClass="reviewName" inlineBlockClass="twoVisitorReviewInside"/>
                        <ImageText text="리뷰명" TextClass="reviewName" inlineBlockClass="threeVisitorReviewInside"/>
                        <ImageText text="리뷰명" TextClass="reviewName" inlineBlockClass="fourVisitorReviewInside"/>
                    </PercentBlock>
            </StoreVisitorReviewDiv>
        </>
    );
};

export default StoreVisitorReview;