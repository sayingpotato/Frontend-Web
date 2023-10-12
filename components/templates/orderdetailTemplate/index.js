import { useEffect, useState, useRef } from 'react'

import {
  Div,
  ContentDiv,
  StoreDiv,
  PName,
  MenuDiv,
  PMenu,
  MoreButton,
  StyledImage,
  ReviewDiv,
  ReviewButton,
  ReviewContent,
} from './style'

import Review from '@components/reviewContent'
import Text from '@components/atoms/text'

const OrderdetailTemplate = ({data}) => {

    console.log(data)

  const menuData = () => {
    const result = []
    if (value.orderDetailOrderItems.length <= 5) {
      for (let i = 0; i < value.orderDetailOrderItems.length; i++) {
        result.push(<PMenu key={i}>{value.orderDetailOrderItems[i].itemName}</PMenu>)
      }
    }
    else {
      for (let i = 0; i < 5; i++) {
        result.push(<PMenu key={i}>{value.orderDetailOrderItems[i].itemName}</PMenu>)
      }
      result.push(<PMenu key={5}>...</PMenu>)
    }

    return result
  }

  return (
    <Div>
      <Text className={data.orderStatus === "ORDER" ? "orderStart" : "orderFinish"} text={data.orderStatus === "ORDER" ? "대기 중" : "계산 완료"}></Text>
      <ContentDiv>
        <StyledImage src={data.storeInfo.thumbnail} alt="logo" />
        
        <StoreDiv>
          <PName>{data.storeInfo.storeName}</PName>
          <MenuDiv>{menuData()}</MenuDiv>
          <MoreButton>주문 상세</MoreButton>
        </StoreDiv>
        <ButtonDiv>
          {data.orderStatus === "ORDER" ? <Button text="거절" className="cancelOrderButton" onClick /> : null}
          {data.orderStatus === "ORDER" ? <Button text="확인" className="approvalOrderButton" onClick={approvalButtonClick} /> : null}
        </ButtonDiv>
      </ContentDiv>
    </Div>
  )
}

export default OrderdetailTemplate
