import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from "@material-ui/core";
import styles from './CountryPicker.module.css'
import {fetchCountries} from "../../api";
import Loader from "../Loader/Loader";

const CountryPicker = ({handleCountryChange}) => {
    const [fetchApi, setFetchApi] = useState([])
    const [loader, setLoader]= useState(true)
    useEffect(() => {
        const fetchTheApi = async () => {
            setFetchApi(await fetchCountries())
        }
        fetchTheApi()
        setLoader(false)
    }, [setFetchApi])

    if(loader) {
        return <Loader/>
    }

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchApi.map(country => <option key={country} value={country}>{country}</option>)}
            </NativeSelect>

        </FormControl>
    );
};

export default CountryPicker;
