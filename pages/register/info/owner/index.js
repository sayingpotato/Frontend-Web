import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { RegisterLevel } from '@utils/recoil/atom.js'
import Register from '@pages/register'
import Next from '@molecules/next'
import RegisterContentInfo from '@organisms/registerContentInfo'
import { BussinessNumber_REGEX_ACTION } from '@constants/register.js'


const Owner = () => {
  const [inputValue, setInputValue] = useState('') // 입력한 사업자등록번호

  const [isNumber, setIsNumber] = useState(false) // 사업자등록번호 REGEX 상태
  const [state, setState] = useState(0) // 입력한 사업자등록번호 상태 값
  const setRegisterLevel = useSetRecoilState(RegisterLevel)

  const onChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    setRegisterLevel(1)
  }, [])

  useEffect(() => {
    if (!inputValue) {
      setState(0)
      return
    }

    if (isNumber) {
      setState(2)
      return
    } 

    setState(1)
  
  }, [isNumber, inputValue])

  const handleColorChange = (action, isValid) => {
    switch (action) {
      case 'Number':
        setIsNumber(isValid)
        break
    }
  }

  return (
    <Register>
      <RegisterContentInfo
        text="사업자등록번호 입력"
        inputOnChange={onChangeInput}
        state={state}
        regexData={BussinessNumber_REGEX_ACTION}
        inputValue={inputValue}
        onValidityChange={handleColorChange}
      />
      <Next state={state} input={inputValue} nextView={'ownerlogin'} />
    </Register>
  )
}

Owner.Layout = ({ children }) => {
  return <div>{children}</div>
}

Owner.Layout.displayName = 'RegisterLayout'

export default Owner
