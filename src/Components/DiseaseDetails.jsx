import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DiseaseDetail() {
  const { id } = useParams();
  const [disease, setDisease] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/diseases/${id}`)
      .then((res) => res.json())
      .then((data) => setDisease(data))
      .catch((error) => console.error("Error fetching disease details:", error));
  }, [id]);

  if (!disease) return <div>Loading...</div>;

  return (
    <div
      className="text-white p-5"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${disease.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "brightness(0.4)",
      }}
    >
      <div className="bg-dark bg-opacity-75 p-4 rounded shadow-lg">
        <h2 className="display-5 fw-bold mb-3">{disease.diseaseName}</h2>
        <p><strong>Region:</strong> {disease.region}</p>
        <p><strong>Cases:</strong> {disease.cases}</p>
        <p><strong>Description:</strong> {disease.description}</p>
        <p><strong>Symptoms:</strong> {disease.symptoms}</p>
        <p><strong>Prevention:</strong> {disease.prevention}</p>
        <p><strong>Treatment:</strong> {disease.treatment}</p>
      </div>
    </div>
  );
}
