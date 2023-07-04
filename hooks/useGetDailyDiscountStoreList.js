import { useEffect, useState } from "react";
import storeService from "services/store.service";

const useGetDailyDiscountStore = (date) => {
    const [data, setData] = useState("");

    useEffect(() => {
        if (date === undefined) return ;
        const getStore = async() => {
            const fetchData = await storeService.getDailyDiscountStore(date); 
            setData(fetchData);
        }
        getStore();
    }, [date]);

    return data;
}

export default useGetDailyDiscountStore;