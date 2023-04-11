  const cafeReviewArr = ["☕ 커피가 맛있어요", "🤫 조용해요", "🍮 디저트가 맛있어요", "🔌 콘센트가 많아요", "🔌 콘센트가 많아요", "🔌 콘센트가 많아요", "🔌 콘센트가 많아요", "🔌 콘센트가 많아요", "🔌 콘센트가 많아요",]

  const cafeReviewData = () => {
    const result = []
      for (let i = 0; i < cafeReviewArr.length; i++) {
        result.push(<ReviewButtonName key={i}>{cafeReviewArr[i]}</ReviewButtonName>)
      }
    return result
  }
        {cafeReviewData()}
