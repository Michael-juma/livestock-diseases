import React, { useState, useEffect } from 'react';
import Dashboard from './Pages/Dashboard';
import './App.css';
import DiseaseSearch from './Components/DiseaseSearch';
import DiseaseCollection from './Components/DiseaseCollection';
import DiseaseForm from './Components/DiseaseForm';
import Video from './Components/Video';
import NavBar from './Components/NavBar';


function App() {
  const [diseases, setDiseases] = useState([]);
    useEffect(() => {
      fetchDiseases();
    }, []);
  
    const fetchDiseases = async () => {
      try {
        const response = await fetch("http://localhost:5000/diseases");
        const data = await response.json();
        setDiseases(data);
      } catch (error) {
        console.error("Error fetching diseases:", error);
      }
    };
  
 
 
    
  return (
    <div className="App"
      style={{
        backgroundImage: `url("https://i.pinimg.com/474x/74/f4/13/74f413376ac1a14ff588803be8d26e21.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300vh",
      }}
    > 
    <NavBar/>
      <Dashboard/>
      <DiseaseSearch/>
      <DiseaseCollection diseases={diseases} setDiseases={setDiseases}/>
      <DiseaseForm diseases={setDiseases}/>
      <Video/>
      
      
    </div>
  );
}

export default App;
