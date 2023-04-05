  const [reviewTitle, setReviewTitle] = useState('리뷰하기')
  const [open, setOpen] = useState(false)

  const reviewButtonClick = () => {
    setReviewTitle('리뷰가 열렸다네')
    setOpen(!open)
  }
