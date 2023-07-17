import React, { useEffect, useState } from 'react';
import SingleMels from '../single meals/SingleMels';
import './Meals.css';
const Meals = () => {
    const [mealsData,setMeals]=useState([]);
     useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=b')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
     },[])
    return (
        <div className='container'>
            <h2>Meal DB</h2>
           <div className='meals-main'>
           {
                mealsData.map( meal => <SingleMels meal={meal} key={meal.idMeal}></SingleMels>)
            }
           </div>
        </div>
    );
};

export default Meals;