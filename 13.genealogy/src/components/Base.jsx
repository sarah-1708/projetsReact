
import React, { useState } from 'react';

export default function Base() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div className="home">
     
        <div className="group">
      <div className={showComponent ? "card":"added"}>
        
        <div>
          <label>Nom : </label>
          <input className="margin" type="text" />
        </div>
        <div>
          <label>Prénom : </label>
          <input className="margin" type="text" />
        </div>
        <div className="flex">
          <div>
            <label>Date de naissance : </label>
            <input className="margin" type="date" />
          </div>
          <div>
            <label>Lieu de naissance : </label>
            <input className="margin" type="text" />
          </div>
        </div>
        <div className="flex">
          <div>
            <label>Date de décès : </label>
            <input className="margin" type="date" />
          </div>
          <div>
            <label>Lieu de décès : </label>
            <input className="margin" type="text" />
          </div>
        </div>
      </div>
      <div className={showComponent ? "round":"roundadded"}>
        <button onClick={() => setShowComponent(true)}> + </button>
      </div>
      </div>
      
      {showComponent && (
        <div>
          <Base />
          <Base />
        </div>
      )}
    </div>
    
  );
}








