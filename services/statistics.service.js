import {statisticsApi} from "api"

const getDailyProfit = async(id) => {
    try {
        const data = await statisticsApi.getDailyProfit(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const getDailyRevenue = async(id) => {
    try {
        const data = await statisticsApi.getDailyRevenue(id);
        return data;
    } catch (error) {
        throw error;
    }
}

const statisticsService = {
    getDailyProfit,
    getDailyRevenue
}

export default statisticsService;