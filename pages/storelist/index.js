import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Router, { useRouter } from 'next/router'
import Image from 'next/image'
import StorelistImage from '@components/storelistImage'

import { Title, DataDiv } from './style'

const StoreList = () => {
  const router = useRouter()

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
        firstImage: '/images/bean.png',
        secondImage: '/images/bean.png',
        thirdImage: '/images/bean.png',
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
        firstImage: '/images/bean.png',
        secondImage: '/images/bean.png',
        thirdImage: '/images/bean.png',
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
      </DataDiv>
    )
  })

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
