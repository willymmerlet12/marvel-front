import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import CharacterDet from "../components/CharacterDet";
import Loader from "react-loader-spinner";
import Search from "../components/searchChar";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [page, setPage] = useState(1);
  const limit = 100;
  const [pageMax, setPageMax] = useState(0);
  const [style, setStyle] = useState({ display: "none" });

  const handleClickPage = (event) => {
    setPage(event.selected + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backk.herokuapp.com/character?page=${page}&name=${searchCharacter}`
        );
        console.log(response.data);
        setCharacters(response.data.data);
        setIsLoading(false);
        setPageMax(Math.ceil(Number(response.data.data.total) / limit));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [page, searchCharacter]);

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
      <h1
        onMouseEnter={(event) => {
          setStyle({ color: "white" });
        }}
      >
        DISCOSVER THE UNIVERSE OF MARVEL
      </h1>

      {characters.results.map((char, i) => {
        return (
          <Link key={char.id} to={`/character/${char.id}`}>
            <div>
              <CharacterDet key={char.id} char={char} />
            </div>
          </Link>
        );
      })}
      <div className="pagi">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageMax}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={handleClickPage}
          containerClassName={"pagination"}
          subContainerClassName={"pages"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default Home;
