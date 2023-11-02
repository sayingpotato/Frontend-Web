import { useEffect, useState, useRef } from 'react'

import { useRecoilValue } from "recoil";
import { WhoStatus } from "@utils/recoil/atom";

import Title from '@molecules/title';
import MypageContentInfoTemplate from '@components/templates/mypageContentInfoTemplate';
import useGetNickName from '@hooks/useGetNickName';
import useGetDiscountTotal from '@hooks/useGetDiscountTotal';
import useGetDiscountDetail from '@hooks/useGetDiscountDetail';

const Mypage = () => {

  const whoStatus = useRecoilValue(WhoStatus);

  const [userInfo, setUserInfo] = useState("");
  const [discountInfo, setDiscountInfo] = useState("");
  const [discountDetail, setDiscountDetail] = useState("");

  const getNickName = useGetNickName();
  const getDiscountTotal = useGetDiscountTotal();
  const getDiscountDetail = useGetDiscountDetail();

  useEffect(() => { 
    if (whoStatus === "customer") {
      setUserInfo(getNickName); 
      setDiscountInfo(getDiscountTotal);
      setDiscountDetail(getDiscountDetail)
    } else {
      setUserInfo(""); 
      setDiscountInfo("");
      setDiscountDetail("")
    }
    

  },[getNickName, getDiscountTotal, getDiscountDetail]);

  return (
    <>
      <Title text="마이페이지" />
      <MypageContentInfoTemplate name={userInfo.nickname} discountData={discountInfo} discountDataDetail={discountDetail} />
    </>
  )
}

export default Mypage
