import React, { useEffect, useState } from "react";

export default function DiseaseCollection() {
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/diseases")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDiseases(data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching diseases:", error));
  }, []);

  return (
    <div className=" container  bg-info-100 min-h-screen">
      <h2 className="text-xl font-semibold text-center mb-2">Disease List</h2>
      <div className="w-full h-full bg bg- flex items-center justify-center rounded">
        <table className="w-full table table-bordered border-danger table-striped table-hover">
          <thead>
            <tr>
              <th className="p-4">Region</th>
              <th className="p-4">Disease</th>
              <th className="p-4">Cases</th>
              <th className="p-4">Symptoms</th>
              <th className="p-4">Treatment</th>
              <th className="p-4">Prevention</th>
              <th className="p-4">Animal Picture</th>
            </tr>
          </thead>
          <tbody>
            {diseases.map((disease) => (
              <tr key={disease.id}>
                <td className="p-4">{disease.region}</td>
                <td className="p-4">{disease.diseaseName}</td>
                <td className="p-4">{disease.cases}</td>
                <td className="p-4">{disease.symptoms}</td>
                <td className="p-4">{disease.treatment}</td>
                <td className="p-4">{disease.prevention}</td>
                <td className="p-2 w-1/3">
                  <img
                    src={disease.image}
                    alt="animal"
                    className="w-full h-full object-cover img-fluid rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
