const date = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const today = new Date()
  const dayName = days[today.getDay()]

  return dayName
}

export default date
