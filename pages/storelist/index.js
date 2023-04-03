import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Router, { useRouter } from 'next/router'
import StorelistImage from '@components/storelistImage'
import StorelistMenu from '@components/storelistMenu'
import StorelistReview from '@components/storelistReview'

import {
  Title,
  DataDiv,
  TitleDiv,
  StoreName,
  StoreMin,
  StoreMax,
  ContentDiv,
} from './style'

const StoreList = () => {
  const animate = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  let data = [
    {
      id: 1,
      name: '좋은 원두',
      maxValue: '25%',
      minValue: '15%',
      images: {
        firstImage: '/images/food.png',
        secondImage: '/images/food.png',
        thirdImage: '/images/Calender.svg',
        fourthImage: '/images/bean.png',
      },
      topMenu: {
        firstTopMenu: '돼지갈비',
        secondTopMenu: '삼겹살',
        thirdTopMenu: '갈매기살',
      },

      topReview: {
        firsttopReview: '음식이 맛있어요',
        secondtopReview: '가성비가 좋아요',
        thirdtopReview: '분위기가 좋아요',
      },
    },
    {
      id: 2,
      name: '좋은 원두',
      maxValue: '25%',
      minValue: '15%',
      images: {
        firstImage: '/images/food.png',
        secondImage: '/images/food.png',
        thirdImage: '/images/Calender.svg',
        fourthImage: '/images/bean.png',
      },
      topMenu: {
        firstTopMenu: '돼지갈비',
        secondTopMenu: '삼겹살',
        thirdTopMenu: '갈매기살',
      },

      topReview: {
        firsttopReview: '음식이 맛있어요',
        secondtopReview: '가성비가 좋아요',
        thirdtopReview: '분위기가 좋아요',
      },
    },
    {
      id: 3,
      name: '좋은 원두',
      maxValue: '25%',
      minValue: '15%',
      images: {
        firstImage: '/images/food.png',
        secondImage: '/images/food.png',
        thirdImage: '/images/Calender.svg',
        fourthImage: '/images/bean.png',
      },

      topMenu: {
        firstTopMenu: '돼지갈비',
        secondTopMenu: '삼겹살',
        thirdTopMenu: '갈매기살',
      },

      topReview: {
        firsttopReview: '음식이 맛있어요',
        secondtopReview: '가성비가 좋아요',
        thirdtopReview: '분위기가 좋아요',
      },
    },
  ]

  const StoreInfoResult = data.map((oneData) => {
    return (
      <DataDiv key={`${oneData.id}`}>
        <StorelistImage imageSrc={JSON.stringify(oneData.images)} />
        <TitleDiv>
          <StoreName>{`${oneData.name}`}</StoreName>
          <StoreMin>{`${oneData.minValue}`}</StoreMin>
          <StoreMax>{`${oneData.maxValue}`}</StoreMax>
        </TitleDiv>
        <ContentDiv>
          <StorelistMenu menu={JSON.stringify(oneData.topMenu)} />
          <StorelistReview review={JSON.stringify(oneData.topReview)} />
        </ContentDiv>
      </DataDiv>
    )
  })

  const router = useRouter()
  const routerValue = [router['query']['lat'], router['query']['lng']]

  // map에서 중심 값을 통하여 정렬 받을 예정
  console.log(routerValue)

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={animate.initial}
          animate={animate.animate}
          exit={animate.exit}
        >
          <Title>내 주변 가게</Title>
          {StoreInfoResult}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default StoreList
