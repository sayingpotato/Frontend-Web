import { useEffect, useState, useRef } from 'react'

import date from '@utils/date'

const TodayDiscount = () => {
  const [nowDay, setNowDay] = useState('')
  const [prevDay, setPrevDay] = useState('')
  const [nextDay, setNextDay] = useState('')

  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ]

  useEffect(() => {
    setNowDay(date())

    const idx = days.indexOf(nowDay)

    if (idx === 0) {
      setPrevDay('토요일')
      setNextDay(days[idx + 1])
      return
    } else if (idx === 6) {
      setNextDay('일요일')
      setPrevDay(days[idx - 1])
      return
    } else {
      setNextDay(days[idx + 1])
      setPrevDay(days[idx - 1])
    }
  }, [])
  return <div></div>
}

export default TodayDiscount
