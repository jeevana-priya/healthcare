import React, { useState } from "react";
import "./pages.css";

const dentists = [
  { id: 1, name: "Dr. Emily White", specialty: "General Dentist", location: "San Francisco, CA" },
  { id: 2, name: "Dr. Michael Brown", specialty: "Orthodontist", location: "Seattle, WA" },
];

const Dentist = () => {
  const [selectedDentist, setSelectedDentist] = useState(null);

  return (
    <div className="page-container">
      <h1>Select a Dentist</h1>
      <ul className="provider-list">
        {dentists.map((dentist) => (
          <li
            key={dentist.id}
            className={selectedDentist === dentist.id ? "selected" : ""}
          >
            <h3>{dentist.name}</h3>
            <p>{dentist.specialty} - {dentist.location}</p>
            <button onClick={() => setSelectedDentist(dentist.id)}>
              {selectedDentist === dentist.id ? "Selected" : "Select"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dentist;
