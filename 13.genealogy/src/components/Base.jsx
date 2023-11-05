
import { useState } from 'react';

export default function Base() {
  const [showComponent, setShowComponent] = useState(false);

  return (

     <div >
        <div className="group">
      <div className={showComponent ? "added":"card"}>
        
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
          <div>
          <label>Profession : </label>
          <input className="margin" type="text" />
        </div>
          <button className= {showComponent ? "round":"round"} onClick={() => setShowComponent(true)}> + </button>
        
      </div>
      
        
      
      </div>
      
      {showComponent && (
        <div className="flex">
          <Base />
          <Mariage/>
          <Base />
        </div>
      )}
      </div>
  );
}

function Mariage(){
    return(
        <div className="center" >
            <h2>⚭</h2>
            <div>
            <label htmlFor="">le : </label>
            <input className="margin" type="date" />
            </div>
            <div>
            <label htmlFor="">à : </label>
            <input className="margin"  type="text" />
            </div>
        </div>
    )
}







