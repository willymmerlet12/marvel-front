import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterDet from "../components/CharacterDet";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3100/");
        setCharacters(response.data.data);
        setIsLoading(true);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return !isLoading ? (
    <span>loading</span>
  ) : (
    <div>
      {characters.map((char, i) => {
        return <CharacterDet key={char.id} char={char} />;
      })}
    </div>
  );
};

export default Home;
