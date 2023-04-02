import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'

import {
  ImageWholeDiv,
  FirstImageDiv,
  SecondImageDiv,
  ThirdImageDiv,
  FourthImageDiv,
  One,
  Two,
  Three,
} from './style'

const StorelistImage = (props) => {
  const imageSrc = JSON.parse(props.imageSrc)

  const firstParentRef = useRef()
  const secondParentRef = useRef()
  const thirdParentRef = useRef()
  const fourthParentRef = useRef()

  const [firstParentImage, setFirstParentImage] = useState(0)
  const [secondParentImage, setSecondParentImage] = useState(0)
  const [thirdParentImage, setThirdParentImage] = useState(0)
  const [fourthParentImage, setFourthParentImage] = useState(0)

  useEffect(() => {
    const firstParentWidth = firstParentRef.current.offsetWidth
    setFirstParentImage(firstParentWidth)
    const secondParentWidth = secondParentRef.current.offsetWidth
    setSecondParentImage(secondParentWidth)
    const thirdParentWidth = thirdParentRef.current.offsetWidth
    setThirdParentImage(thirdParentWidth)
    const fourthParentWidth = fourthParentRef.current.offsetWidth
    setFourthParentImage(fourthParentWidth)
  }, [firstParentRef, secondParentRef, thirdParentRef, fourthParentRef])

  return (
    <ImageWholeDiv>
      <One>
        <FirstImageDiv ref={firstParentRef}>
          <Image
            src={`${imageSrc['firstImage']}`}
            alt="첫 번째 이미지"
            width={firstParentImage}
            height={100}
          />
        </FirstImageDiv>
      </One>
      <Two>
        <SecondImageDiv ref={secondParentRef}>
          <Image
            src={`${imageSrc['secondImage']}`}
            alt="두 번째 이미지"
            width={secondParentImage}
            height={50}
          />
        </SecondImageDiv>
        <ThirdImageDiv ref={thirdParentRef}>
          <Image
            src={`${imageSrc['thirdImage']}`}
            alt="세 번째 이미지"
            width={thirdParentImage}
            height={50}
          />
        </ThirdImageDiv>
      </Two>
      <Three>
        <FourthImageDiv ref={fourthParentRef}>
          <Image
            src={`${imageSrc['fourthImage']}`}
            alt="네 번째 이미지"
            width={fourthParentImage}
            height={100}
          />
        </FourthImageDiv>
      </Three>
    </ImageWholeDiv>
  )
}

export default StorelistImage
