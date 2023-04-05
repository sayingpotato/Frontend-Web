import { useEffect, useState, useRef } from 'react'

import Title from '@components/title'
import OrderedContent from '@components/orderedContent'

import { ContentDiv } from './style'

const index = () => {
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
  ]

  const orderedResult = data.map((oneData) => {
    return (
      <OrderedContent
        key={`${oneData.id}`}
        data={`${JSON.stringify(oneData.value)}`}
      ></OrderedContent>
    )
  })
  return (
    <>
      <Title>주문 내역</Title>
      <ContentDiv>{orderedResult}</ContentDiv>
    </>
  )
}

export default index
