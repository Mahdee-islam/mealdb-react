import { Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useNavigate } from 'react-router';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  
const Meals = (props) => {
    const {strMeal, strInstructions, strMealThumb} = props.meal;
    let navigate = useNavigate();
  const handleClick = () => {
    navigate('/meal')
  }
    
    return (
       
           <Grid item xs={4}>
          <Item>
              <img style = {{
                  width: '100%',
                  height: '50%'
              }} src = { strMealThumb } alt = "img" ></img>
              <h3> {strMeal} </h3>
              <p> {strInstructions.slice(0,100)} </p>
              <Button onClick = { handleClick }  variant = "contained" color= "secondary" type= "button">
                  Detail</Button>
          </Item>
        </Grid>
            
       
    );
};

export default Meals;