import { useEffect, useState, useRef } from 'react'

import MystoreTemplate from '@components/templates/mystoreTemplate'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Title from '@molecules/title';

const Mystore = () => {
    const data = [
    { id: 0, image: '/images/search.svg', title: '검색', comment: '/images/search.svg' },
    { id: 1, image: '/images/todaydiscount.svg', title: '오늘의 할인', comment: '/images/todaydiscount.svg' },
    { id: 2, image: '/images/map.svg', title: '할인 지도', comment: '/images/map.svg' },
    { id: 3, image: '/images/order.svg', title: '주문 내역', comment: '/images/order.svg' },
    { id: 4, image: '/images/mypage.svg', title: '마이 페이지', comment: '/images/mypage.svg' },
  ]

  const settings = {
    dots: true, // 아래에 점 표시
    infinite: true, // 무한 루프
    speed: 500, // 애니메이션 속도
    slidesToShow: 1, // 화면에 보이는 카드 수
    slidesToScroll: 1, // 한 번에 스크롤되는 카드 수
    responsive: [
      {
        breakpoint: 768, // 화면 크기가 768px 미만일 때
        settings: {
          slidesToShow: 1, // 화면에 보이는 카드 수 조정
        },
      },
    ],
  };

  return (
    <div>
      <Title text="내 가게 목록" />
      <Slider {...settings}>
        {data.map((item, index) => {
            return (
                <MystoreTemplate key={index} data={item} />
            )
        })}
    </Slider>
    </div>
  )
}

export default Mystore
