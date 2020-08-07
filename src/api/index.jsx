import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changeableUrl = url
    if(country){
        changeableUrl = `${url}/countries/${country}`
    }
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl)

        if(!confirmed) return undefined

        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
    } catch (error) {
        return undefined

    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        if(!data) return undefined

        return data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

    } catch (e) {
        console.log(e)

    }
}

export const fetchCountries = async () => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`)


return countries.map(country => country.name )
    }catch (e) {

    }
}