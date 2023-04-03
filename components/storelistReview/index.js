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
          <ReviewName>{`${reviewList['firstTopReview']}`}</ReviewName>
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
          <ReviewName>{`${reviewList['secondTopReview']}`}</ReviewName>
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
          <ReviewName>{`${reviewList['thirdTopReview']}`}</ReviewName>
        </ThreeColoredDiv>
      </ReviewDiv>
    </ReviewWholeDiv>
  )
}

export default StorelistReview
