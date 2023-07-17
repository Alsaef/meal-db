import React from 'react';
import './SingleMeals.css'
const SingleMels = (props) => {
    console.log(props.meal)
    const {strMeal,strMealThumb,strInstructions,strYoutube}=props.meal
    return (
        <div className='card-System'>
          <img src={strMealThumb} alt="" />  
          <h2>{strMeal}</h2>
          <p>{strInstructions.slice(0,120)}</p>
         <div className='preview-div'>
         <a href={strYoutube}  className='button'>Preview</a>
         </div>
        </div>
    );
};

export default SingleMels;