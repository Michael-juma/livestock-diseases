import React, { useState } from "react";

export default function DiseaseForm({ setDiseases }) {
  const [formData, setFormData] = useState({
    region: "",
    diseaseName: "",
    cases: "",
    symptoms: "",
    treatment: "",
    prevention: "",
    image: "",
  });

  const postDiseases = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/diseases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("Disease added successfully");
      } else {
        alert("Error adding disease");
      }
    } catch (error) {
      alert("Server error. Could not add disease.");
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDisease = {
      ...formData,
      id: Date.now(),
    };

    if (typeof setDiseases === "function") {
      setDiseases((prev) => [...prev, newDisease]);
    } else {
      console.warn("setDiseases is not a function. Skipping local update.");
    }

    postDiseases(newDisease);

    
    setFormData({
      region: "",
      diseaseName: "",
      cases: "",
      symptoms: "",
      treatment: "",
      prevention: "",
      image: "",
    });
  };

  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card mt-4 p-5 col-md-6">
      <h1 className="strong">Add New Disease</h1>
      <small>Add your entry below</small>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="region" className="form-label">
            Region Affected
          </label>
          <input
            type="text"
            className="form-control"
            id="region"
            name="region"
            placeholder="Region affected"
            value={formData.region}
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Disease Name
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="diseaseName"
            placeholder="Disease Name"
            value={formData.diseaseName}
            onChange={handleOnChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cases" className="form-label">
            Cases
          </label>
          <textarea
            className="form-control"
            id="cases"
            name="cases"
            rows="3"
            value={formData.cases}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="symptoms" className="form-label">
            Symptoms
          </label>
          <textarea
            className="form-control"
            id="symptoms"
            name="symptoms"
            rows="3"
            value={formData.symptoms}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="treatment" className="form-label">
            Treatment
          </label>
          <textarea
            className="form-control"
            id="treatment"
            name="treatment"
            rows="3"
            value={formData.treatment}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="prevention" className="form-label">
            Prevention
          </label>
          <textarea
            className="form-control"
            id="prevention"
            name="prevention"
            rows="3"
            value={formData.prevention}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Animal Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            placeholder="Enter image URL"
            value={formData.image}
            onChange={handleOnChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
