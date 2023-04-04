import { useEffect, useState, useRef } from 'react'

import date from '@utils/date'
import Title from '@components/title'
import DiscountTable from '@components/discountTable'

import {
  InfoDiv,
  TypeButtonDiv,
  TypeButton,
  DayInfoDiv,
  BackDiv,
  WholeDiv,
} from './style'

const TodayDiscount = () => {
  const [nowDay, setNowDay] = useState('')
  const [prevDay, setPrevDay] = useState('')
  const [nextDay, setNextDay] = useState('')

  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ]

  useEffect(() => {
    setNowDay(date())

    const idx = days.indexOf(nowDay)

    if (idx === 0) {
      setPrevDay('토요일')
      setNextDay(days[idx + 1])
      return
    } else if (idx === 6) {
      setNextDay('일요일')
      setPrevDay(days[idx - 1])
      return
    } else {
      setNextDay(days[idx + 1])
      setPrevDay(days[idx - 1])
    }
  }, [])

  let data = [
    {
      id: 1,
      value: {
        name: '좋은 원두',
        imageSrc: '/images/bronzeMedal.svg',
      },
      type: 'food',
    },
    {
      id: 2,
      value: {
        name: '좋은 원두2',
        imageSrc: '/images/silverMedal.svg',
      },
      type: 'cafe',
    },
    {
      id: 3,
      value: {
        name: '좋은 원두3',
        imageSrc: '/images/goldMedal.svg',
      },
      type: 'food',
    },
    {
      id: 4,
      value: {
        name: '좋은 원두4',
        imageSrc: '/images/close.svg',
      },
      type: 'food',
    },
    {
      id: 5,
      value: {
        name: '좋은 원두5',
        imageSrc: '/images/close.svg',
      },
      type: 'cafe',
    },
    {
      id: 6,
      value: {
        name: '좋은 원두6',
        imageSrc: '/images/close.svg',
      },
      type: 'food',
    },
  ]

  const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  for (let i = 0; i < 12; i++) {
    const value1 = data[i] || '' // undefined나 null 대신 빈 문자열 사용
    console.log(value1)
  }
  const rendering = () => {
    const result = []

    for (let i = 0; i < arr2.length; i++) {
      result.push(<span key={i}>{arr2[i] + ' / '}</span>)
    }
    return result
  }

  return (
    <>
      <Title>오늘의 할인</Title>
      <InfoDiv>
        <TypeButtonDiv>
          <TypeButton>식당</TypeButton>
          <TypeButton>카페</TypeButton>
        </TypeButtonDiv>
        <DayInfoDiv>
          <p>{`${prevDay}`}</p>
          <p>{`${nowDay}`}</p>
          <p>{`${nextDay}`}</p>
        </DayInfoDiv>
      </InfoDiv>
      <BackDiv>
        <WholeDiv>{rendering()}</WholeDiv>
      </BackDiv>
    </>
  )
}

export default TodayDiscount
