import { useEffect, useState, useRef } from 'react'

import date from '@utils/date'

const TodayDiscount = () => {
  useEffect(() => {
    console.log(date())
  }, [])
  return <div></div>
}

export default TodayDiscount
