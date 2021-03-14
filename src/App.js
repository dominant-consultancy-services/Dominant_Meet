import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [countries, setCountries] = useState( [] );


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

  } ,[]);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* Loop through all the countries and show dropdown list of the options using useState */}

            {
              countries.map( country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ) )
            }
          </Select>
        </FormControl>
      </div>


      {/* Header */}
      {/* Title + select input dropdown */}



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
