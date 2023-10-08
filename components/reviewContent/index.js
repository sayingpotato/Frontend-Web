import { useEffect, useState, useRef } from 'react'
import { Wholediv, ReviewWholeDiv, ReviewButtonDiv, ReviewResetButton, ReviewConfirmButton, ReviewButtonName } from './style'
import { useRecoilState } from "recoil";

import { ReviewData } from "@utils/recoil/atom";

const Review = (props) => {
  const type = props.type;
  const reviewStatus = props.reviewStatus;
  console.log(reviewStatus)

  const [clickedIndex, setClickedIndex] = useState([]);
  // const [submitReviewData, setSubmitReviewData] = useRecoilState(ReviewData);
  
  const cafeReviewArr = [
    { id: 1, name: "☕ 커피가 맛있어요" },
    { id: 2, name: "🤫 조용해요" },
    { id: 3, name: "🔌 콘센트가 많아요" },
    { id: 4, name: "🤩 분위기가 좋아요" },
    { id: 5, name: "💸 가성비가 좋아요" },
    { id: 6, name: "📶 와이파이가 잘 터져요" },
    { id: 7, name: "🧁 디저트가 맛있어요" },
  ];

  const foodReviewArr = [
    { id: 1, name: "🥘 음식이 맛있어요" },
    { id: 2, name: "🤫 조용해요" },
    { id: 3, name: "🤩 분위기가 좋아요" },
    { id: 4, name: "🚽 화장실이 깨끗해요" },
    { id: 5, name: "💸 가성비가 좋아요" },
    { id: 6, name: "🆓 서비스를 많이 줘요" },
    { id: 7, name: "😇 친절해요" },
  ];

  const handleClick = (index) => {
    if (clickedIndex.includes(index)) {
      const removedArr = clickedIndex.filter(item => item !== index);
      setClickedIndex(removedArr);
    } else {
      setClickedIndex([...clickedIndex, index]);
    }
  }

  const confirmButtonClick = () => {
    console.log("확인- 차후 처리")
  }

  const resetButtonClick = () => {
    setClickedIndex([-1])
  }

  const reviewArr = type === "CAFE" ? cafeReviewArr : foodReviewArr;
  
  return (
    <Wholediv>
      <ReviewWholeDiv>
        {reviewArr.map((data, index) => (
      <ReviewButtonName
        key={index}
        onClick={() => handleClick(index)}
        state={clickedIndex.includes(index)}
      >
        {data.name}
      </ReviewButtonName>
    ))}
      </ReviewWholeDiv>
      <ReviewButtonDiv>
        <ReviewResetButton onClick={resetButtonClick}>초기화</ReviewResetButton>
        {reviewStatus !== "EXPIRED" ? <ReviewConfirmButton onClick={confirmButtonClick}>확인</ReviewConfirmButton> : null}
      </ReviewButtonDiv>
    </Wholediv>
  )
}

export default Review
