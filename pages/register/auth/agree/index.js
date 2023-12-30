import { useState, useEffect } from "react";
import { useSetRecoilState} from "recoil"
import { RegisterLevel } from "@utils/recoil/atom.js"
import Register from '@pages/register'
import AgreeInfo from "@organisms/AgreeInfo";
import Next from "@molecules/next";

const Agree = () => {
   const setRegisterLevel = useSetRecoilState(RegisterLevel);
   const [state, setState] = useState(1);
   const [useAgree, setUseAgree] = useState(false);
   const [infoAgree, setInfoAgree] = useState(false);
   const [locateAgree, setLocateAgree] = useState(false);
   const [allAgree, setAllAgree] = useState(false);

   useEffect(() => {
      if (useAgree && infoAgree && locateAgree) {
         setState(2);
         return ;
      }
      setState(1)
   }, [useAgree, infoAgree, locateAgree]);
   
   useEffect(() => {
      if (allAgree) {
         setUseAgree(true);
         setInfoAgree(true);
         setLocateAgree(true);
         return ;
      }
      setUseAgree(false);
      setInfoAgree(false);
      setLocateAgree(false);
   }, [allAgree]);

   const agreeContent = [
      {title : '이용약관 동의', state : useAgree, setState : setUseAgree},
      {title : '개인정보 수집 및 이용 동의', state : infoAgree, setState : setInfoAgree},
      {title : '위치기반서비스 이용약관 동의', state : locateAgree, setState : setLocateAgree},
      {title : '모두 동의 합니다.', state : allAgree, setState : setAllAgree}
   ];
   
   useEffect(() => {
      setRegisterLevel(0);
   },[]);

  return (
      <Register>
         <AgreeInfo data={agreeContent} />
         <Next state={state} nextView={'id'} />
     </Register>
  )
}
Agree.Layout = ({ children }) => {
   return (
      <div>
       {children}
      </div>
   );
 };
 
Agree.Layout.displayName = 'RegisterLayout';

export default Agree
