import React from "react";
import { Link } from "react-router-dom";
import Hulk from "../img/hulk.png";

const CharacterPage = ({ character, comics }) => {
  return (
    <div className="character-container">
      <div className="char-img">
        <img
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt=""
        />
      </div>
      <div className="char-infos">
        <h2 className="titre-id">{character.name}</h2>

        <p className="desc-text">
          {character.description ? character.description : "Pas de description"}
        </p>
        <div className="char-comics-container">
          <h3>{character.name} apears on :</h3>
          {comics.map((comic, index) => {
            return (
              <>
                <div className="comics-ord">
                  <div className="item-ord">
                    <div className="comic-title">
                      <div key={index}>{comic.title}</div>
                    </div>
                    <div className="comic-id">
                      <Link to={`/comics/${comic.id}`}>
                        <img
                          src={
                            comic.thumbnail.path ===
                            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                              ? { Hulk }
                              : `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                          }
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
