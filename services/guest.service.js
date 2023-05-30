import {guestApi} from "api"

const login = () => {
    
}

const checkSameId = () => {

}

const submitRegister = async(form) => {
    try {
        const data = await guestApi.submitRegister(form);
        return data;
    } catch (error) {
        throw error;
    } 
}

const submitStudentCard = () => {

}

const guestService = {
    login,
    checkSameId,
    submitRegister,
    submitStudentCard
}

export default guestService;