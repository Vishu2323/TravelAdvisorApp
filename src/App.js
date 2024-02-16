import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData} from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App=()=>{

        const[ places,setplaces]= useState([]);
        const[coordinates, setCoordinates]=useState({lat:0, lng:0});
        const[bounds, setBounds]= useState(null);

        useEffect(()=>{
            navigator.geolocation.getCurrentPosition(()=>{
                setCoordinates({})
            });
        },[]);

    useEffect(()=>{
      getPlacesData(bounds, bounds)
        .then((data)=>{
            console.log(data)
            setplaces(data)
        })
    },);
    return (
        <>
        <CssBaseline/>
        <Header/>
        <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
        <List/>
        </Grid>
        <Grid item xs={12} md={8}>
           <Map
            setBounds={setBounds}
            setCoordinates={setCoordinates}
            coordinates={coordinates}
            
          />
        </Grid>
        </Grid>
       

        </>
    )
}
export default App;