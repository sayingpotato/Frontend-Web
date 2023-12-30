import { useState, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { RegisterLevel } from '@utils/recoil/atom.js'
import Register from '@pages/register'
import RegisterSelfInfo from '@organisms/registerSelfInfo'
import Next from '@molecules/next'

const Auth = () => {
  const [state, setState] = useState(0)
  const setRegisterLevel = useSetRecoilState(RegisterLevel)

  const onClickAuthButton = () => {
    if (state === 2) {
      setState(1)
      return
    }
    setState(2)
  }

  useEffect(() => {
    setRegisterLevel(0)
  }, [])

  return (
    <Register>
      <RegisterSelfInfo buttonClick={onClickAuthButton} state={state} />
      <Next state={state} nextView={'agree'} />
    </Register>
  )
}                           

Auth.Layout = ({ children }) => {
  return <div>{children}</div>
}

Auth.Layout.displayName = 'RegisterLayout'

export default Auth