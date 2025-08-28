import { useState } from "react";
import languages from "../data/languages";
const Main = () => {
  const [currentInex, setCurrentIndex] = useState(0);
  return (
    <>
      <h1 className="mb-5">Learn Web development</h1>
      <div className="container">
        {languages.map((language) => {
          const { id, title } = language;
          return (
            <button key={id} type="button" className="btn btn-primary m-2">
              {title}
            </button>
          );
        })}
        <div className="card mt-4 p-2">
          <div className="title fw-bold">HTML</div>
          <div className="description">description</div>
        </div>
      </div>
    </>
  );
};

export default Main;
