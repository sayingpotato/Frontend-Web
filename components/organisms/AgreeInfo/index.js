import { InfoDiv, AuthDiv } from './style';

import Text from '@atoms/text'
import Button from '@atoms/button'
import Image from '@atoms/image'

const AgreeInfo = ({ data }) => {
    return (
        <InfoDiv>
            <Text text="동의 여부" className="registerTitle" />
            {data.map((item, index) => {
               return (
                  <Button
                    key = {index}
                    onClick = {() => item.setState(item.state ? false : true)} 
                    className="agreeButton"
                    state = {item.state}>
                        <Image 
                            width={30}
                            height={30}
                            src={item.state ? "/images/checkCircleTrue.svg" : "/images/checkCircleFalse.svg"}
                            className="agreeIcon"
                            alt="agreeIcon"/>
                        {item.title}
                    </Button>
               )
            })}      
        </InfoDiv>
    )
}

export default AgreeInfo