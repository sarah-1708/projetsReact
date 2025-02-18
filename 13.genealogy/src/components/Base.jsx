import { useState } from "react";

export default function Base() {
  const [showComponent, setShowComponent] = useState(false);
  const [lastname, setLastname]= useState("");
  const [firstname, setFirstname]= useState("");
  const [birthdate, setBirthdate]= useState("");
  const [birthplace, setBirthplace]=useState("");
  const [deathdate, setDeathdate] = useState("");
  const [deathplace, setDeathplace] = useState("");
  const [work, setWork] = useState("");

  const onChangeHandlerLastname = (event) => {
    setLastname(event.target.value);
  };

  const onChangeHandlerFirstname = (event) =>{
setFirstname(event.target.value);
  };

    const onChangeHandlerBirthdate = (event) => {
      setBirthdate(event.target.value);
    };

     const onChangeHandlerBirthplace = (event) => {
       setBirthplace(event.target.value);
     };

      const onChangeHandlerDeathdate = (event) => {
        setDeathdate(event.target.value);
      };

       const onChangeHandlerDeathplace = (event) => {
         setDeathplace(event.target.value);
       };

        const onChangeHandlerWork = (event) => {
          setWork(event.target.value);
        };




  return (
    <div>
      <div className="group">
        <div className={showComponent ? "added" : "card"}>
          <div>
            <label>Nom : </label>
            <input
              className="margin"
              type="text"
              onChange={onChangeHandlerLastname}
              value={lastname}
            />
          </div>
          <div>
            <label>Prénom : </label>
            <input
              className="margin"
              type="text"
              onChange={onChangeHandlerFirstname}
              value={firstname}
            />
          </div>
          <div className="flex">
            <div>
              <label>Date de naissance : </label>
              <input
                className="margin"
                type="date"
                onChange={onChangeHandlerBirthdate}
                value={birthdate}
              />
            </div>
            <div>
              <label>Lieu de naissance : </label>
              <input
                className="margin"
                type="text"
                onChange={onChangeHandlerBirthplace}
                value={birthplace}
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <label>Date de décès : </label>
              <input
                className="margin"
                type="date"
                onChange={onChangeHandlerDeathdate}
                value={deathdate}
              />
            </div>
            <div>
              <label>Lieu de décès : </label>
              <input
                className="margin"
                type="text"
                onChange={onChangeHandlerDeathplace}
                value={deathplace}
              />
            </div>
          </div>
          <div>
            <label>Profession : </label>
            <input
              className="margin"
              type="text"
              onChange={onChangeHandlerWork}
              value={work}
            />
          </div>
          <button
            className={showComponent ? "round" : "round"}
            onClick={() => setShowComponent(true)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>

      {showComponent && (
        <div className="flex">
          <Base />
          <Mariage />
          <Base />
        </div>
      )}
    </div>
  );
}

function Mariage() {

  const [weddingdate, setWeddingdate] = useState("");
  const [weddingplace, setWeddingplace] = useState("");

  const onChangeHandler = (event) => {
    setWeddingdate(event.target.value);
    setWeddingplace(event.target.value);
  };

  return (
    <div>
      <h2>⚭</h2>
      <div>
        <label htmlFor="">le : </label>
        <input
          className="margin"
          type="date"
          onChange={onChangeHandler}
          value={weddingdate}
        />
      </div>
      <div>
        <label htmlFor="">à : </label>
        <input
          className="margin"
          type="text"
          onChange={onChangeHandler}
          value={weddingplace}
        />
      </div>
    </div>
  );
}
