import React from "react";

const Card = ({language}) => {
  console.log(language)
  return (
    <div className="card mt-4 p-2">
      {language=== null ? (
        <h3>Nessun linguaggio selezionato</h3>
      ) : (
        <>
          <h3>{language.title}</h3>
          <div className="description">{language.description}</div>
        </>
      )}
    </div>
  );
};

export default Card;
