import { motion, AnimatePresence } from 'framer-motion'
import Router, { useRouter } from 'next/router'

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
          <DataDiv>123</DataDiv>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default StoreList
