import { LevelComponent, LevelOne, LevelTwo, LevelThree, DetailLevelBlue, DetailLevelGray } from "./style"
import {TOTAL} from '../../constants/register.js'

export default function Level({level}){
    const firstDetailBlue = [3, 5, 5];
    const secondDetailBlue = [0, 3, 5]; 

    const blue = (array) => {
        return(
            [... new Array(array[level])].map((index) => {
                return (<DetailLevelBlue key = {index}/>)
            })
        )
    }

    const gray = (array) => {
        return(
            [... new Array(TOTAL - array[level])].map((index) => {
                return (<DetailLevelGray key = {index}/>)
            })
        )
    }

    return (
        <LevelComponent>
            <LevelOne>본인인증</LevelOne>
            {blue(firstDetailBlue)}
            {gray(firstDetailBlue)}
            {level === 0 ?
                <LevelTwo 
                    style = {{backgroundColor : '#B8B8BA'}}>
                    정보입력</LevelTwo> 
                :
                <LevelTwo>정보입력</LevelTwo>
            }
            {blue(secondDetailBlue)}
            {gray(secondDetailBlue)}
            {level !== 2 ?
                <LevelThree 
                    style = {{backgroundColor : '#B8B8BA'}}>
                    학교인증</LevelThree> 
                :
                <LevelThree>학교인증</LevelThree>
            }
        </LevelComponent>
    )
}