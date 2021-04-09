
import client from '../api/client'
import { useStateValue } from '../StateProvider'



function useApi() {
    const [{ user }, dispatch] = useStateValue();

    const getData = async () => {
        const response = await client.get("https://api.imgflip.com/get_memes");
        if (response.status === 200) {
            return dispatch({ type: 'GET__MEMES', payload: response.data.data.memes })
        }
        return response.status
    }



    const getCountryStats = async (country) => {
        const response = await client.get(`https://api.covid19api.com/total/country/${country}`);
        if (response.status === 200) {
            dispatch({ type: 'GET__COUNTRY__STATS', payload: response.data })
            return response.status
        }
        return response.status
    }

    const getImages = async () => {
        const response = await client.get('https://pixabay.com/api/?key=20911146-3339648298a3c3202221cb182&q=yellow+flowers&image_type=photo')
        if (response.status === 200) {
            dispatch({ type: 'GET__IMAGES', payload: response.data.hits });
            return response.status
        }
        return response.status
    }

    const getCountryStatsGlobal = async () => {
        const response = await client.get(`https://api.covid19api.com/summary`);
        if (response.status === 200) {
            dispatch({ type: 'GET__GLOBAL', payload: response.data.Countries })
        }
        return response.status
    }

    const getFoodImages = async (category) => {
        const response = await client.get(`https://pixabay.com/api/?key=20911146-3339648298a3c3202221cb182&category=${category}&image_type=photo`)
        if (response.status === 200) {
            dispatch({ type: 'GET__IMAGES__DATA', payload: response.data.hits });
            return response.status
        }
        return response.status
    }

    return { getData, getCountryStats, getCountryStatsGlobal, getImages,getFoodImages }
}
export default useApi;


