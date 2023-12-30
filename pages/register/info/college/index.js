import { useEffect, useState } from 'react'
import Register from '@pages/register'
import Next from '@molecules/next'
import { RegisterLevel } from '@utils/recoil/atom.js'
import { useSetRecoilState } from 'recoil'
import RegisterContentInfo from '@organisms/registerContentInfo'
import { CutomerNumber_REGEX_ACTION, CustomerDept_REGEX_ACTION, CustomerCollege_REGEX_ACTION } from '@constants/register.js'

const College = () => {
  const setRegisterLevel = useSetRecoilState(RegisterLevel)

  const [inputCustomerNumberValue, setInputCustomerNumberValue] = useState('') // 입력한 학번
  const [inputCustomerDeptValue, setInputCustomerDeptValue] = useState('') // 입력한 학과명
  const [inputCustomerCollegeValue, setInputCustomerCollegeValue] = useState('') // 입력한 대학명

  const [isNumber, setIsNumber] = useState(false) // 학번 REGEX 상태
  const [isKoreanEnglishDept, setIsKoreanEnglishDept] = useState(false) // 학과명 REGEX 상태
  const [isKoreanEnglishCollege, setIsKoreanEnglishCollege] = useState(false) // 대학명 REGEX 상태
 
  const [customerNumberState, setCustomerNumberState] = useState(0) // 입력한 학번 상태 값
  const [customerDeptState, setCustomerDeptState] = useState(0) // 입력한 학과명 상태 값
  const [customerCollegeState, setCustomerCollegeState] = useState(0) // 입력한 대학명 상태 값
  const [totalState, setTotalState] = useState(0) // 학번 & 학과명 & 대학명 전체 상태 값

  const onChangeCustomerNumberInput = (e) => {
    setInputCustomerNumberValue(e.target.value)
  }

  const onChangeCustomerDeptInput = (e) => {
    setInputCustomerDeptValue(e.target.value)
  }

  const onChangeCustomerCollegeInput = (e) => {
    setInputCustomerCollegeValue(e.target.value)
  }

  useEffect(() => {
    setRegisterLevel(2)
  }, [])

  useEffect(() => {
    if (!inputCustomerNumberValue) {
      setCustomerNumberState(0)
      return
    }

    if (isNumber) {
      setCustomerNumberState(2)
      return
    }

    setCustomerNumberState(1)
  }, [inputCustomerNumberValue, isNumber])

  useEffect(() => {
    if (!inputCustomerDeptValue) {
      setCustomerDeptState(0)
      return
    }

    if (isKoreanEnglishDept) {
      setCustomerDeptState(2)
      return
    }

    setCustomerDeptState(1)
  }, [inputCustomerDeptValue, isKoreanEnglishDept])

  useEffect(() => {
    if (!inputCustomerCollegeValue) {
      setCustomerCollegeState(0)
      return
    }

    if (isKoreanEnglishCollege) {
      setCustomerCollegeState(2)
      return
    }

    setCustomerCollegeState(1)
  }, [inputCustomerCollegeValue, isKoreanEnglishCollege])

  useEffect(() => {
    if (customerNumberState === 2 && customerDeptState === 2 && customerCollegeState === 2) {
      setTotalState(2)
      return
    }
    setTotalState(1)
  })

  const handleCustomerNumberColorChange = (action, isValid) => {
    switch (action) {
      case 'Number':
        setIsNumber(isValid)
        break
    }
  }

  const handleCustomerDeptColorChange = (action, isValid) => {
    switch (action) {
      case 'KoreanEnglish':
        setIsKoreanEnglishDept(isValid)
        break
    }
  }

  const handleCustomerCollegeColorChange = (action, isValid) => {
    switch (action) {
      case 'KoreanEnglish':
        setIsKoreanEnglishCollege(isValid)
        break
    }
  }

  return (
    <Register>
      <RegisterContentInfo
        text="학번 입력"
        inputOnChange={onChangeCustomerNumberInput}
        state={customerNumberState}
        regexData={CutomerNumber_REGEX_ACTION}
        inputValue={inputCustomerNumberValue}
        onValidityChange={handleCustomerNumberColorChange}
      />
      <RegisterContentInfo
        text="학과명 입력"
        inputOnChange={onChangeCustomerDeptInput}
        state={customerDeptState}
        regexData={CustomerDept_REGEX_ACTION}
        inputValue={inputCustomerDeptValue}
        onValidityChange={handleCustomerDeptColorChange}
      />
      <RegisterContentInfo
        text="대학교명 입력"
        inputOnChange={onChangeCustomerCollegeInput}
        state={customerCollegeState}
        regexData={CustomerCollege_REGEX_ACTION}
        inputValue={inputCustomerCollegeValue}
        onValidityChange={handleCustomerCollegeColorChange}
      />

        <Next state={totalState} input={[inputCustomerNumberValue, inputCustomerDeptValue, inputCustomerCollegeValue]} nextView={'login'} />
    </Register>
  )
}

College.Layout = ({ children }) => {
  return <div>{children}</div>
}

College.Layout.displayName = 'RegisterLayout'

export default College
