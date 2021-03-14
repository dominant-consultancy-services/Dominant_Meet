import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [countries, setCountries] = useState( [] );
  const [country, setCountry] = useState( "worldwide" );


  useEffect( () => {
    // load once when app component load right
    const getCountries = async () => {
      await fetch( "https://disease.sh/v3/covid-19/countries" )
        .then( ( response ) => response.json() )
        .then( ( data ) => {
          const countries = data.map( ( country ) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            } ) );
          setCountries( countries );
        } );

    }
    getCountries();

  }, [] );

  const onCountryChange = ( e ) => {
    const countryCode = e.target.value;

    setCountry( countryCode );

  }
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}  >
            <MenuItem value="worldwide">Worldwide</MenuItem>

            {
              countries.map( country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ) )
            }
          </Select>
        </FormControl>
      </div>




      {/* InfoBoxes */}
            
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
