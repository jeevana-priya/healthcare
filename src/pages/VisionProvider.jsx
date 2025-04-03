import React, { useState } from "react";
import "./pages.css";

const visionProviders = [
  { id: 1, name: "Visionworks", location: "Austin, TX" },
  { id: 2, name: "LensCrafters", location: "San Diego, CA" },
];

const VisionProvider = () => {
  const [selectedVisionProvider, setSelectedVisionProvider] = useState(null);

  return (
    <div className="page-container">
      <h1>Select a Vision Provider</h1>
      <ul className="provider-list">
        {visionProviders.map((provider) => (
          <li
            key={provider.id}
            className={selectedVisionProvider === provider.id ? "selected" : ""}
          >
            <h3>{provider.name}</h3>
            <p>{provider.location}</p>
            <button onClick={() => setSelectedVisionProvider(provider.id)}>
              {selectedVisionProvider === provider.id ? "Selected" : "Select"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisionProvider;
