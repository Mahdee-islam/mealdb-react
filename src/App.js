
import { Route, Routes } from 'react-router';
import './App.css';
import Meal from './components/Meal';
import Restaurant from './components/Restaurant';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = { <Restaurant/> } />
        <Route path = "/restaurant" element = { <Restaurant/> } />
        <Route path = "/meal" element = { <Meal/> } />
      </Routes>
    </div>
  );
}

export default App;
