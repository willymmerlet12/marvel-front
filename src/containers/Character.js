import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharacterPage from "../components/CharacterPage";
import Loader from "react-loader-spinner";
const Character = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  const [comics, setComics] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backk.herokuapp.com/character/${id}`
        );
        const responseComics = await axios.get(
          `https://marvel-backk.herokuapp.com/character/${id}/comics`
        );
        setComics(responseComics.data.data);
        setCharacter(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <Loader
      type="Rings"
      color="red"
      height={120}
      width={120}
      timeout={6000}
      className="loader"
    />
  ) : (
    <div>
      <div>
        <CharacterPage
          character={character.results[0]}
          comics={comics.results}
        />
      </div>
      );
    </div>
  );
};

export default Character;
