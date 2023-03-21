import Back from '../../components/back/index.js'
import SignUp from '../../components/signUp/index.js'
import Level from '../../components/level/index.js'
import Line from '../../components/line/index.js'
import { useState } from 'react'

const Register = () => {
  const [level, setLevel] = useState(0);

  return (
    <>
      <Back/>
        <SignUp/>
          <Level level = {level}/>
          <Line/>
    </>
  )
}

export default Register
