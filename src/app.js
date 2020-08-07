import React from 'react';
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import styles from './App.module.css'
import {fetchData} from "./api";
import coronaImage from "./images/covid-19-articol.jpg"
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";

class App extends React.Component {

    state = {
        data: {},
        country: '',
        error: false

    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        console.log("this data",fetchedData)
        if (!fetchedData) {
            this.setState({error: true})
        }
        this.setState({data: fetchedData})
    }


    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        if (!fetchedData) {
            this.setState({error: true})
        }
        this.setState({data: fetchedData, country: country})
    }

    render() {

        const {data, country, error} = this.state
        if(error) return <Error/>

        return (
            <main>
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="Corona Virus"/>
                 <Cards
                    data={data}/>

                <CountryPicker
                    handleCountryChange={this.handleCountryChange}
                />
                <Chart
                    data={data}
                    country={country}/>
            </div>
                <Footer/>
            </main>
        );
    }


}

export default App;