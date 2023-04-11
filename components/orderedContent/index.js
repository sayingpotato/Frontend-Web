  const [reviewTitle, setReviewTitle] = useState('리뷰하기')
  const [open, setOpen] = useState(false)

  const reviewButtonClick = () => {
    setReviewTitle('리뷰가 열렸다네')
    setOpen(!open)
  }
      <ReviewDiv state={open}>
        <ReviewButton onClick={reviewButtonClick}>
          {open ? '▲ 접기' : '▼ 리뷰하기'}
        </ReviewButton>
        <ReviewContent state={open}>
          <Review />
        </ReviewContent>
      </ReviewDiv>
