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
        backgroundImage: `url("https://i.pinimg.com/736x/02/c8/19/02c8190ca30141f5e8f5ea5c5ff8ae7b.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400vh",
        
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
