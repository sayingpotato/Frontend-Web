import { StoreVisitorReviewDiv } from './style';

import PercentBlock from '@molecules/percentBlock';
import ImageText from '@molecules/imageText';
import InlineText from '@molecules/inlineText';

const StoreVisitorReview = ({reviewData}) => {

    return (
        <>
            <StoreVisitorReviewDiv>
                    <InlineText divClassName="basic" text1="방문자 리뷰" text2={reviewData.total} text1ClassName="storeDetailMiniTitle" text2ClassName="storeDetailReviewTotal" />
                    <PercentBlock>
                        <ImageText text={reviewData.review1.text} textClass="reviewName" inlineBlockClass="oneVisitorReviewInside" out="visitorReviewOutside" reviewCount={reviewData.review1.count} />
                        <ImageText text={reviewData.review2.text} textClass="reviewName" inlineBlockClass="twoVisitorReviewInside" out="visitorReviewOutside" reviewCount={reviewData.review2.count} />
                        <ImageText text={reviewData.review3.text} textClass="reviewName" inlineBlockClass="threeVisitorReviewInside" out="visitorReviewOutside" reviewCount={reviewData.review3.count} />
                        <ImageText text={reviewData.review4.text} textClass="reviewName" inlineBlockClass="fourVisitorReviewInside" out="visitorReviewOutside" reviewCount={reviewData.review4.count} />
                    </PercentBlock>
            </StoreVisitorReviewDiv>
        </>
    );
};

export default StoreVisitorReview;