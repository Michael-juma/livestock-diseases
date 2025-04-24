import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DiseaseCollection() {
  const [diseases, setDiseases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/diseases")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setDiseases(data);
        else console.error("Data is not an array:", data);
      })
      .catch((error) => console.error("Error fetching diseases:", error));
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Disease List</h2>
      <div className="row">
        {diseases.map((disease) => (
          <div
            key={disease.id}
            className="col-md-6 col-lg-4 mb-4"
            onClick={() => navigate(`/disease/${disease.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="card h-100 shadow-sm">
              <img
                src={disease.image}
                alt={disease.diseaseName}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{disease.diseaseName}</h5>
                <p><strong>Region:</strong> {disease.region}</p>
                <p><strong>Cases:</strong> {disease.cases}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
