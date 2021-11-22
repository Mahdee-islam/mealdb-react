import { createTheme, Grid, TextField } from '@mui/material';
import { green, purple } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Meals from './Meals';

const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

const Restaurant = () => {
const [searchText, setSearchText] = useState('');
const [meals, setMeals] = useState([]);
useEffect( () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setMeals(data.meals))

},[searchText])
const handleSearchField = e => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
}
    return (
        <ThemeProvider theme = { theme }>
<div>
            <TextField onChange = {handleSearchField} id="standard-basic" label="Search meals" variant="standard" size="small" />
            <br/>
            <Grid container spacing={4} columns={16}>
  
  {
    meals.map(meal => <Meals meal = { meal } key = {meal.idMeal} />)
}
 
</Grid>
        </div>
        </ThemeProvider>
        
    );
};

export default Restaurant;