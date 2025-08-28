import languages from '../data/languages'

const Languages = () => {
  return (
    <>
      {languages.map((language) => {
        const { id, title } = language;
        return (
          <button key={id} type="button" className="btn btn-primary m-2">
            {title}
          </button>
        );
      })}
    </>
  );
};

export default Languages;
