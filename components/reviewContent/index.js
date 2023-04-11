import React from 'react'

import { Wholediv, ReviewWholeDiv, ReviewButtonDiv, ReviewButtonName, ReviewResetButton, ReviewConfirmButton } from './style'

const Review = () => {
  const cafeReviewArr = ["☕ 커피가 맛있어요", "🤫 조용해요", "🍮 디저트가 맛있어요", "🔌 콘센트가 많아요", "🔌 콘센트가 많아요", "🔌 콘센트가 많아요", "🔌 콘센트가 많아요", "🔌 콘센트가 많아요", "🔌 콘센트가 많아요",]

  const cafeReviewData = () => {
    const result = []
      for (let i = 0; i < cafeReviewArr.length; i++) {
        result.push(<ReviewButtonName key={i}>{cafeReviewArr[i]}</ReviewButtonName>)
      }
    return result
  }

  return (
    <Wholediv>
      <ReviewWholeDiv>
        {cafeReviewData()}
      </ReviewWholeDiv>
      <ReviewButtonDiv>
        <ReviewResetButton>초기화</ReviewResetButton>
        <ReviewConfirmButton>확인</ReviewConfirmButton>
      </ReviewButtonDiv>
    </Wholediv>
  )
}

export default Review
