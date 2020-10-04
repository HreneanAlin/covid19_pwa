import React, {useEffect, useState} from 'react';
import {fetchDailyData} from "../../api";
import {Line, Bar} from "react-chartjs-2";
import styles from "./Chart.module.css"
import Loader from "../Loader/Loader";

const Chart = ({data:{confirmed,recovered,deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);


    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchApi()
        console.log("the dailydatiss", dailyData)
    }, [])



    if(!confirmed ) {
        return <Loader/>
    }

    // if(!dailyData && !country){
    //     return <p>Currently not working! It is a problem with covid19.mathdro.id API</p>
    // }

    const lineChart = (
         dailyData && dailyData.length  ?
            <Line data={{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Infected',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true
                }]

            }}/> : <p>Currently the global statistic is not working! It is a problem with covid19.mathdro.id API</p>

    )

    const barChart = (
        confirmed
            ? (<Bar data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',

                        backgroundColor: ['rgba(0,0,255,0.5)',
                                          'rgba(0,255,0,0.5)',
                                          'rgba(255,0,0,0.5)',],
                        data:[confirmed.value,recovered.value,deaths.value]

                    }]


                }}
                    options={{
                        legend: {display: false},
                        title: {display: true, text: `Current state in ${country}`}
                    }}/>


            ) : null
    )


    return (
        <div className={styles.container}>
            {country ? barChart:lineChart}
        </div>
    );
};

export default Chart;
