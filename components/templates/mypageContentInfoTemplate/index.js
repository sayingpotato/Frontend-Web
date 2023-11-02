import { MypageContentInfoTemplateDiv  } from './style';

import MypageDiscountInfo from "@organisms/mypageDiscountInfo"
import MypageUserInfo from '@templates/mypageUserInfoTemplates';
import MypageLinkButtons from '@organisms/mypageLinkButtons';

import { useRecoilValue } from "recoil";
import { WhoStatus } from "@utils/recoil/atom";

const MypageContentInfoTemplate = ({name, discountData, discountDataDetail}) => {
  const whoStatus = useRecoilValue(WhoStatus);
    
  return (
    <>
      {
        whoStatus === "customer" ? <MypageUserInfo name={name} totalMoney={discountData.totalDiscountPrice}/> : <MypageUserInfo name={name} totalMoney={0}/>
      }
      
      <MypageContentInfoTemplateDiv>
          {
            whoStatus === "customer" ? <MypageDiscountInfo discountDataDetail={discountDataDetail} /> : null
          }
          <MypageLinkButtons />
      </MypageContentInfoTemplateDiv>
    </>
      
  );
};

export default MypageContentInfoTemplate;