import languages from '../data/languages'

const Card = () => {
  return (
    <>
      {languages.map((language) => {
        const { id, title, description } = language;
        return (
          <div key={id} className="card mt-4 p-2">
            <div className="title fw-bold">{title}</div>
            <div className="description">{description}</div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
