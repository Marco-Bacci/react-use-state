import { useState } from "react";
import languages from "../data/languages";
const Main = () => {
  const [selected, setSelected] = useState(languages[0]);
  return (
    <>
      <h1 className="mb-5">Learn Web development</h1>
      <div className="container">
        {languages.map((language) => {
          const { id, title } = language;
          return (
            <button key={id} type="button" className="btn btn-primary m-2"onClick={()=> setSelected(language)} >
              {title}
            </button>
          );
        })}
        <div className="card mt-4 p-2">
          <div className="title fw-bold">{selected.title}</div>
          <div className="description">{selected.description}</div>
        </div>
      </div>
    </>
  );
};

export default Main;
