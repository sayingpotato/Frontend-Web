import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { RegisterLevel } from '@utils/recoil/atom.js'
import Register from '@pages/register'
import { useDebounce } from '@hooks/debounce'
import { isSpecialCharacter } from '@hooks/regex'
import { ID_REGEX_ACTION } from '@constants/register.js'
import Next from '@molecules/next'
import RegisterContentInfo from '@organisms/registerContentInfo'

const ID = () => {

  const [inputValue, setInputValue] = useState('') // 입력한 아이디

  // 아이디 REGEX 상태
  const [isNumber, setIsNUmber] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)
  const [isMoreThanSix, setIsMoreThanSix] = useState(false)

  const [state, setState] = useState(0) // 입력한 아이디 상태 값
  
  const setRegisterLevel = useSetRecoilState(RegisterLevel)
  const debouncedSetInputValue = useDebounce(setInputValue, 500)

  const onChangeInput = (e) => {
    debouncedSetInputValue(e.target.value)
  }

  useEffect(() => {
    setRegisterLevel(1)
  }, [])

  useEffect(() => {
    if (!inputValue) {
      setState(0)
      return
    }

    if (isSpecialCharacter(inputValue)) {
      setState(1)
      return
    }

    if (isEnglish && isNumber && isMoreThanSix) {
      setState(2)
    } else {
      setState(1)
    }
  }, [isEnglish, isNumber, isMoreThanSix, inputValue])

  const handleColorChange = (action, isValid) => {
    switch (action) {
      case 'English':
        setIsEnglish(isValid)
        break
      case 'Number':
        setIsNUmber(isValid)
        break
      case 'Six':
        setIsMoreThanSix(isValid)
        break
    }
  }

  return (
    <Register>
      <RegisterContentInfo
        text="아이디 입력"
        inputOnChange={onChangeInput}
        state={state}
        regexData={ID_REGEX_ACTION}
        inputValue={inputValue}
        onValidityChange={handleColorChange}
      />
      <Next state={state} input={inputValue} nextView={'ownerpw'} />
    </Register>
  )
}

ID.Layout = ({ children }) => {
  return <div>{children}</div>
}

ID.Layout.displayName = 'RegisterLayout'

export default ID
