import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipDetail.css';

const StarshipDetail = ({ starship }) => {
  if (!starship) {
    return <div>No starship data available</div>;
  }

  return (
    <div className="starship-detail-container">
      <h2 className="starship-detail-title">{starship.name}</h2>
      <div className="starship-detail-content">
        <p><strong>Model:</strong> {starship.model}</p>
        <p><strong>Class:</strong> {starship.vehicle_class}</p>
        <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
        <p><strong>Length:</strong> {starship.length} meters</p>
        <p><strong>Cost:</strong> {starship.cost_in_credits} Galactic Credits</p>
        <p><strong>Crew:</strong> {starship.crew}</p>
        <p><strong>Passengers:</strong> {starship.passengers}</p>
        <p><strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}</p>
        <p><strong>Cargo Capacity:</strong> {starship.cargo_capacity} kg</p>
        <p><strong>Consumables:</strong> {starship.consumables}</p>
        <p><strong>Films:</strong> {starship.films.join(', ')}</p>
        <p><strong>Pilots:</strong> {starship.pilots.join(', ')}</p>
        <p><strong>URL:</strong> {starship.url}</p>
        <p><strong>Created:</strong> {starship.created}</p>
        <p><strong>Edited:</strong> {starship.edited}</p>
      </div>
    </div>
  );
};

export default StarshipDetail;
