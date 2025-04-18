import React, { useState } from "react";

export default function DiseaseSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  function handleSearch() {
    if (!query.trim()) return;
    setLoading(true);

    // Query the diseaseData endpoint with full-text search
    fetch(`http://localhost:5000/diseaseData?q=${query}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setResults(data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error("Fetch error:", error);
        setLoading(false);
        setResults([]);
      });
  }

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">
         Disease Search
      </h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Search disease, symptom..."
          value={query}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearch}
          className="bg bg-info text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}

      {!loading && results.length > 0 && (
        <div className="space-y-4">
          {results.map(function (item) {
            return (
              <div
                key={item.id}
                className="border p-4 rounded shadow-md flex gap-4"
              >
                <img
                  src={item.image}
                  alt={item.disease}
                  className="w-32 h-32 object-cover rounded"
                />
                <div>
                  <h2 className="text-xl font-semibold">
                    {item.disease} ({item.abbreviation})
                  </h2>
                  <p>
                    <strong>Region:</strong> {item.region}
                  </p>
                  <p>
                    <strong>Disease:</strong> {item.disease}
                  </p>
                  <p>
                    <strong>Cases:</strong> {item.cases}
                  </p>
                  <p>
                    <strong>Symptoms:</strong> {item.symptoms}
                  </p>
                  <p>
                    <strong>Treatment:</strong> {item.treatment}
                  </p>
                  <p>
                    <strong>Prevention:</strong> {item.prevention}
                  </p>
                  <p>
                    <strong>Animal picture</strong>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!loading && results.length === 0 && query && (
        <p className="text-center text-gray-600">
          No diseases found for "<strong>{query}</strong>"
        </p>
      )}
    </div>
  );
}
