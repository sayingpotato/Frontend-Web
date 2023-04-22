import { useEffect, useState, useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link'

import Title from '@components/title'

import MoneySrc from '@public/images/coin.svg'
import PotatoSrc from '@public/images/modify.svg'
import NoticeSrc from '@public/images/notice.svg'
import MedalSrc from '@public/images/medal.svg'
import ChartSrc from '@public/images/chart.svg'
import CallSrc from '@public/images/call.svg'

import { UserInfo, UserName, DiscountDiv, MoneyTitle, MoneyDiv, Money, BackDiv, DiscountInfo, DiscountTitle, ButtonWholeDiv, ButtonDiv, ButtonTitle, ButtonLogoutTitle } from './style'

const ImageLists = [
    { image: PotatoSrc, title: '프로필 수정', next: 'modify' },
    { image: NoticeSrc, title: '공지사항', next: 'notice' },
    { image: MedalSrc, title: '내 랭킹 보기', next: 'myrank' },
    { image: ChartSrc, title: '통계 보기', next: 'mychart' },
    { image: CallSrc, title: '고객센터', next: 'service' }
  ]

const mypage = () => {

  return (
    <>
      <Title>마이페이지</Title>
      <UserInfo>
        <UserName>권낙현님</UserName>
        <DiscountDiv>
            <MoneyTitle>할인금액</MoneyTitle>
            <MoneyDiv>
                <Image src={MoneySrc} alt="logo" />
                <Money>15000</Money>
            </MoneyDiv>
        </DiscountDiv>
      </UserInfo>
      <BackDiv>
        <DiscountInfo>
            <DiscountTitle>최근 받은 할인</DiscountTitle>
        </DiscountInfo>
        {ImageLists.map((item, index) => {
            const nextUrl = `/${item.next}`
            return (
                <ButtonWholeDiv key={index}>
                    <Link href={nextUrl}>
                    <ButtonDiv>
                        <Image src={item.image} alt={item.title} />
                        <ButtonTitle>{item.title}</ButtonTitle>
                    </ButtonDiv>
                    </Link>
                </ButtonWholeDiv>
            )
        })}
        <ButtonWholeDiv>
            <Link href={'/login'}>
                <ButtonDiv>
                    <ButtonLogoutTitle>로그아웃</ButtonLogoutTitle>
                </ButtonDiv>
            </Link>
        </ButtonWholeDiv>
      </BackDiv>
    </>
  )
}

export default mypage
