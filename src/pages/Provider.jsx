import React, { useState, useEffect } from "react";
import "./pages.css";
import axios from 'axios';

const Provider = () => {
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/providers");
        setProviders(response.data);
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };
    fetchProviders();
  }, []);

  return (
    <div className="page-container">
      <h1>Select a Provider</h1>
      <ul className="provider-list">
        {providers.map((provider) => (
          <li
            key={provider.id}
            className={selectedProvider === provider.id ? "selected" : ""}
          >
            <h3>{provider.name}</h3>
            <p>{provider.specialty} - {provider.location}</p>
            <button onClick={() => setSelectedProvider(provider.id)}>
              {selectedProvider === provider.id ? "Selected" : "Select"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Provider;
