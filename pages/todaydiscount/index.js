import { useEffect, useState, useRef } from 'react'
import router from "next/router";

import date from '@utils/date'

import Title from '@molecules/title'
import TodayDiscountHeader from '@organisms/todayDiscountHeader'
import TodayDiscountTemplate from '@templates/todayDiscountTemplate'

import useGetDailyDiscountStore from '@hooks/useGetDailyDiscountStoreList';
import { ContentWholeDiv, ContentDiv } from './style';

const TodayDiscount = () => {

  const [clickValue, setClickValue] = useState('FOOD')
  const [datas, setData] = useState(null);

    // const dateName = date();
  const dateName = "MON";
  const getDailyDiscountStore = useGetDailyDiscountStore(dateName);
  const [nowDay, setNowDay] = useState("");
  const [englishNowDay, setEnglishNowDay] = useState("");
  const [prevDay, setPrevDay] = useState("");
  const [nextDay, setNextDay] = useState("");

  const [data, setData] = useState(null);

  const daysOfWeek = [["일요일", "SUN"], ["월요일", "MON"], ["화요일", "TUE"], ["수요일", "WED"], ["목요일", "THU"], ["금요일", "FRI"], ["토요일", "SAT"]];

  useEffect(() => {
    const dateIndex = date();
    const todayName = daysOfWeek[dateIndex][0]
    const prevName = daysOfWeek[dateIndex-1][0]
    const nextName = daysOfWeek[dateIndex+1][0]

    setPrevDay(prevName)
    setNextDay(nextName)
    setNowDay(todayName)
    setEnglishNowDay("MON") // DB에 데이터 삽입 이후 변경 예정 
  }, [])

  const getDailyDiscountStore = useGetDailyDiscountStore(englishNowDay);

  useEffect(() => {
    setData(getDailyDiscountStore);
  }, [dateName, getDailyDiscountStore])

  const onClickItem = (id) => {
    router.push({
      pathname : `/storedetail/${id}`,
      query : {id : id}
    })
  }

  const discountTable = (oneData, index) => {
    console.log(index)
    return (
      <TodayDiscountTemplate
        className={index === datas.length - 1 ? 'last' : ''}
        // key={`${oneData.index}`}
        // data={`${JSON.stringify(oneData)}`}
        // onClick={onClickItem(index)}
      ></TodayDiscountTemplate>
    )
  }

  const CafeArr = datas && datas.map((oneData, index) => {
    return (
      oneData.catecory === 'CAFE' && discountTable(oneData, index)
    )
  })
  
  const FoodArr = datas && datas.map((oneData, index) => {
    return oneData.catecory === 'FOOD' &&  discountTable(oneData, index)
  })

  const typeFoodClick = (e) => {
    setClickValue('food')
  }

  const typeCafeClick = (e) => {
    setClickValue('cafe')
  }


  return (
    <>
      <Title text="오늘의 할인"/>
      <TodayDiscountHeader FoodOnClick={typeFoodClick} CafeOnClick={typeCafeClick} 
        state={clickValue}
        // prevDay={`${prevDay}`} nowDay={`${nowDay}`} nextDay={`${nextDay}`}
        />
      <ContentWholeDiv>
        <ContentDiv>{`${clickValue}` === 'CAFE' ? CafeArr : FoodArr}</ContentDiv>
      </ContentWholeDiv>
    </>
  )
}

export default TodayDiscount
