import { useState, useRef, useEffect } from "react";
import { RegisterLevel, StudentCard } from "@utils/recoil/atom";
import { useRecoilState, useSetRecoilState} from "recoil";
import Register from "@pages/register";
import Next from "@molecules/next";
import RegisterStudentCard from "@organisms/registerStudentCard";

export default function Student(){
    const setRegisterLevel = useSetRecoilState(RegisterLevel);
    const [state, setState] = useState(0);
    const [imageSource, setImageSource] = useRecoilState(StudentCard);
    const [alterImage, setAlterImage] = useState();
    const inputRef = useRef(null);

    useEffect(() => {
        setRegisterLevel(2);
    },[])

    useEffect(() => {
        if (imageSource) {
            setState(2);
        return ;
        }
        setState(0);
    },[imageSource])

    const onClickImage = () => {
        inputRef.current.handleClick();
    }   

    const onChangeFile = (e) => {
        const imageUrl = e.target.files[0];
        const alterImageUrl = URL.createObjectURL(imageUrl);
        setImageSource(imageUrl);
        setAlterImage(alterImageUrl);
    }

    return (
        <Register>
            <RegisterStudentCard
                text="학생증 인증"
                type="file"
                inputOnChange={onChangeFile}
                imageOnClick={onClickImage}
                src={alterImage ? alterImage: "/images/studentPreview.svg"}
                ref={inputRef}
            />
            <Next state={state} input={imageSource} nextView={'student'} />
        </Register>
    )
    
}

Student.Layout = ({ children }) => {
    return (
       <div>
        {children}
       </div>
    );
};
  
Student.Layout.displayName = 'RegisterLayout';