import React, { useState, useEffect } from 'react';
import Dashboard from './Pages/Dashboard';
import './App.css';
import DiseaseSearch from './Components/DiseaseSearch';
import DiseaseCollection from './Components/DiseaseCollection';
import DiseaseForm from './Components/DiseaseForm';
import Video from './Components/Video';


function App() {
  const [diseases, setDiseases] = useState([
    {
      region: "North",
      diseaseName: "FMD",
      cases: "100",
      symptoms: "Fever, Blisters",
      treatment: "Vaccination",
      prevention: "Quarantine",
      image: "https://www.cfsph.iastate.edu/DiseaseInfo/ImageDB/FMD/FMD_003.jpg"
    }
  ]);
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
    <div className="App"> 
      <Dashboard/>
      <DiseaseSearch/>
      <DiseaseCollection diseases={diseases} setDiseases={setDiseases}/>
      <DiseaseForm diseases={setDiseases}/>
      <Video/>
      
      
    </div>
  );
}

export default App;
