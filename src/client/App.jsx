import React from 'react';
import Button from "./Button";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecipeCard } from './RecipeCard';

  const App = () => {
      return (
        <Router>
              <div>
                  <Button />  
                  <Button2 />
        </div>  
        </Router>

      
        
    )
  }

export default App;