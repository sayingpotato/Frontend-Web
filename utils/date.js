const date = () => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = new Date();
  const dayName = daysOfWeek[today.getDay()];

  return dayName
}

export default date
