import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { RegisterLevel } from '@utils/recoil/atom.js'
import Register from '@pages/register/index'
import Next from '@components/molecules/next'
import RegisterContentInfo from '@organisms/registerContentInfo'
import { PW_REGEX_ACTION } from '@constants/register.js'

const Pw = () => {
  const [inputValue, setInputValue] = useState('') // 입력한 비밀번호
  const [state, setState] = useState(0) // 입력한 비밀번호 상태 값
  const [inputCheck, setInputCheck] = useState(0) // 비밀번호 확인 상태 값
  // 비밀번호 상태 값 & 비밀번호 확인 상태 값 (전체)
  const [totalState, setTotalState] = useState(0)

  // 비밀번호 REGEX 상태
  const [isNumber, setIsNumber] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)
  const [isMoreThanEight, setIsMoreThanEight] = useState(false)
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false)

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

    if (isEnglish && isNumber && isMoreThanEight && isSpecialCharacter) {
      setState(2)
    } else {
      setState(1)
    }

    if (state === 2 && inputCheck === 2) {
      setTotalState(2)
      return
    }
    setTotalState(1)
  }, [
    isEnglish,
    isNumber,
    isMoreThanEight,
    inputValue,
    isSpecialCharacter,
    inputCheck,
    state,
  ])

  const handleColorChange = (action, isValid) => {
    switch (action) {
      case 'English':
        setIsEnglish(isValid)
        break
      case 'Number':
        setIsNumber(isValid)
        break
      case 'Eight':
        setIsMoreThanEight(isValid)
        break
      case 'SpecialCharacter':
        setIsSpecialCharacter(isValid)
        break
    }
  }
  const onChangeCheckInput = (e) => {
    if (inputValue == e.target.value) {
      setInputCheck(2)
      return
    }
    setInputCheck(1)
  }

  return (
    <Register>
      <RegisterContentInfo
        text="비밀번호 입력"
        inputOnChange={onChangeInput}
        state={state}
        regexData={PW_REGEX_ACTION}
        inputValue={inputValue}
        onValidityChange={handleColorChange}
      />

      <RegisterContentInfo
        text="비밀번호 확인"
        inputOnChange={onChangeCheckInput}
        state={inputCheck}
        type="password"
      />

      <Next state={totalState} input={inputValue} nextView={'nickname'} />
    </Register>
  )
}

Pw.Layout = ({ children }) => {
  return <div>{children}</div>
}

Pw.Layout.displayName = 'RegisterLayout'

export default Pw
