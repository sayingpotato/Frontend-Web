import { Div } from './style'
import { useRef, useEffect, useState } from 'react'

const DiscountTable = (props) => {
  const data = JSON.parse(props.data)

  return (
    <>
      <Div>{data['name']}</Div>
    </>
  )
}

export default DiscountTable
