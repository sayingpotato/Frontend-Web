import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { RegisterLevel } from '@utils/recoil/atom.js'
import Register from '@pages/register'
import Next from '@molecules/next'
import RegisterContentInfo from '@organisms/registerContentInfo'
import { NickName_REGEX_ACTION } from '@constants/register.js'

const OwnerNickName = () => {
  const [inputValue, setInputValue] = useState('') // 입력한 닉네임

  // 닉네임 REGEX 상태
  const [isMoreThanTwo, setIsMoreThanTwo] = useState(false)
  const [isKoreanEnglish, setIsKoreanEnglish] = useState(false)

  const [state, setState] = useState(0) // 입력한 닉네임 상태 값
  
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

    if (isMoreThanTwo && isKoreanEnglish) {
      setState(2)
      return
    }
    setState(1)
  }, [isMoreThanTwo, inputValue, isKoreanEnglish])

  const handleColorChange = (action, isValid) => {
    switch (action) {
      case 'Two':
        setIsMoreThanTwo(isValid)
        break
      case 'KoreanEnglish':
        setIsKoreanEnglish(isValid)
        break
    }
  }

  return (
    <Register>
      <RegisterContentInfo
        text="닉네임 입력"
        inputOnChange={onChangeInput}
        state={state}
        regexData={NickName_REGEX_ACTION}
        inputValue={inputValue}
        onValidityChange={handleColorChange}
      />
      <Next state={state} input={inputValue} nextView={'ownerlogin'} />
    </Register>
  )
}

OwnerNickName.Layout = ({ children }) => {
  return <div>{children}</div>
}

OwnerNickName.Layout.displayName = 'RegisterLayout'

export default OwnerNickName
