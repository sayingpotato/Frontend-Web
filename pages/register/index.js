import Image from "@atoms/image";
import MemberTitle from '@organisms/memberTitle'
import Level from '@components/organisms/level/index.js'
import Line from "@atoms/line";

const Register = ({ children }) => {
  const onClickBack = () => {
    Router.back();
  }

  return (
    <>
      <Image src="/images/back.svg" alt="뒤로 가기" className="backArrowImage" onClick={onClickBack} width={42} height={42} />
      <MemberTitle 
        title={'SIGN UP'}
        subTitle={'감자가 되어봅시다!'}/>
      <Level/>
      <Line className="memberLine" />
      {children}
    </>
  )
}

export default Register
