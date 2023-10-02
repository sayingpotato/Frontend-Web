import { useEffect, useState, useRef } from 'react'

import Title from '@components/title'
import OrderedContent from '@components/orderedContent'

import { ContentDiv } from './style'

const index = () => {

  const orderedResult = data.map((oneData) => {
    return (
      <OrderedContent
        key={`${oneData.id}`}
        data={`${JSON.stringify(oneData.value)}`}
        type={`${oneData.type}`}
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
