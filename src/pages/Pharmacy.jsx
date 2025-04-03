import React, { useState } from "react";
import "./pages.css";

const pharmacies = [
  { id: 1, name: "CVS Pharmacy", location: "New York, NY" },
  { id: 2, name: "Walgreens", location: "Los Angeles, CA" },
  { id: 3, name: "Rite Aid", location: "Chicago, IL" },
];

const Pharmacy = () => {
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  return (
    <div className="page-container">
      <h1>Select a Pharmacy</h1>
      <ul className="provider-list">
        {pharmacies.map((pharmacy) => (
          <li
            key={pharmacy.id}
            className={selectedPharmacy === pharmacy.id ? "selected" : ""}
          >
            <h3>{pharmacy.name}</h3>
            <p>{pharmacy.location}</p>
            <button onClick={() => setSelectedPharmacy(pharmacy.id)}>
              {selectedPharmacy === pharmacy.id ? "Selected" : "Select"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pharmacy;
