import { useState } from "react";
import languages from "../data/languages";
import Card from "./Card";

const Main = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <h1 className="mb-5">Learn Web development</h1>
      <div className="container">
        {languages.map((language) => {
          const { id, title } = language;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setSelected(language)}
              className={`btn m-2 ${
                selected != null && language.id === selected.id
                  ? "btn-warning"
                  : "btn-primary"
              }`}
            >
              {title}
            </button>
          );
        })}

        <Card language = {selected}/>
      </div>
    </>
  );
};

export default Main;
