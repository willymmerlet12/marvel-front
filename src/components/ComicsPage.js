import React from "react";

const ComicsPage = ({ comics }) => {
  return (
    <div className="character-container">
      <div className="char-img">
        <img
          src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
          alt=""
        />
      </div>
      <div className="char-infos">
        <h2 className="titre-id">{comics.title}</h2>

        <p className="desc-text">
          {comics.description
            ? comics.description
            : `Looks like there isnt enough informations about ${comics.title} `}
        </p>
      </div>
    </div>
  );
};

export default ComicsPage;
