import fetcher from "api/fetcher";

const submitRegister = async(form) => {
    const {data} = await fetcher.post(
        "api/v1/customers/signUp",
        form
    );
    return data.data;
}

const login = async(form) => {
    const {data} = await fetcher.post(
        "api/v1/customers/signIn",
        form
    );
    return data.data;
}

const guest = {
    submitRegister,
    login
}

export default guest;