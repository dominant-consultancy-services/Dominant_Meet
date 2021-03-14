import { Card, CardContent, FormControl, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';


import './App.css';
import InfoBox from './InfoBox';
import Map from './Map';

function App() {
  const [countries, setCountries] = useState( [] );
  const [country, setCountry] = useState( "worldwide" );
  const [countryInfo, setCountryInfo] = useState( {} );

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

  const onCountryChange = async ( e ) => {
    const countryCode = e.target.value;

    setCountry( countryCode );
    const url = countryCode == "worldwide" ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch( url )
      .then( response => response.json() )
      .then( data => {
        setCountry( countryCode );


        setCountryInfo( data );
      } );

  };
  console.log( 'COUNTRY INFO >>>', countryInfo );
  return (
    <div className="app" >
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}  >
              <MenuItem value="worldwide">Worldwide</MenuItem>

              {
                countries.map( country => (
                  <MenuItem className="my-2 border border-warning rounded-pill bg-dark text-white" value={country.value}>{country.name}</MenuItem>
                ) )
              }
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox title="Coronavirus cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Deathes" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />

        </div>





        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by Country</h3>
          {/* Table */}
          <h3>Worldwide new cases</h3>
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
