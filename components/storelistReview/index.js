import Image from 'next/image'

import {
  ReviewWholeDiv,
  ReviewDiv,
  ReviewName,
  OneColoredDiv,
  TwoColoredDiv,
  ThreeColoredDiv,
} from './style'

const StorelistReview = (props) => {
  const reviewList = JSON.parse(props.review)
  return (
    <ReviewWholeDiv>
      <ReviewDiv>
        <OneColoredDiv>
          <Image
            src={`/images/goldMedal.png`}
            alt="금메달"
            width={10}
            height={10}
          />
          <ReviewName>{`${reviewList['firstTopReivew']}`}</ReviewName>
        </OneColoredDiv>
      </ReviewDiv>
      <ReviewDiv>
        <TwoColoredDiv>
          <Image
            src={`/images/goldMedal.png`}
            alt="금메달"
            width={10}
            height={10}
          />
          <ReviewName>{`${reviewList['secondTopReivew']}`}</ReviewName>
        </TwoColoredDiv>
      </ReviewDiv>
      <ReviewDiv>
        <ThreeColoredDiv>
          <Image
            src={`/images/goldMedal.png`}
            alt="금메달"
            width={10}
            height={10}
          />
          <ReviewName>{`${reviewList['thirdTopReivew']}`}</ReviewName>
        </ThreeColoredDiv>
      </ReviewDiv>
    </ReviewWholeDiv>
  )
}

export default StorelistReview
