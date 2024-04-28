import React, { useEffect, useState } from 'react';

function Recommd() {

    const[recommd, setRecommd ] = useState([]);

    useEffect(() => {
        getRecommd()
    },[]);

    const getRecommd = async() => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=96de5f8d876b4599a17a24264d8ba2f9&number=10`);
        const data = await api.json();
        //console.log(data);
        setRecommd(data.recipes);

    }



  return (
    <div>
        {recommd.map((recipe) => {
            return (
                <div key = {recipe.id}>
                    <p>{recipe.title}</p>
                </div>
            )
        })}

    </div>
  )
}

export default Recommd