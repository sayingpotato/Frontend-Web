import storeService from "services/store.service"; 

const useSubmitOrder = (form) => { 
   
    const submitOrder = async() => {
        const data = await storeService.submitOrder(form);
        return data;
    }

    return submitOrder;
}

export default useSubmitOrder;

