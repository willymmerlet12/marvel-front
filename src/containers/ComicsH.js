import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ComicsDetails from "../components/ComicsDetails";
import Loader from "react-loader-spinner";
import ReactPaginate from "react-paginate";

const ComicsH = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState([]);
  const [pageMax, setPageMax] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 100;
  const [style, setStyle] = useState({ display: "none" });

  const handleClickPage = (event) => {
    console.log(event);
    setPage(event.selected + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backk.herokuapp.com/comics?page=${page}`
        );

        setPageMax(Math.ceil(Number(response.data.data.total) / limit));
        setComics(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [page]);
  return isLoading ? (
    <div>
      <Loader
        type="Rings"
        color="red"
        height={80}
        width={80}
        timeout={6000}
        className="loader"
      />
    </div>
  ) : (
    <div>
      <h1
        onMouseEnter={(event) => {
          setStyle({ color: "white" });
        }}
      >
        DISCOSVER THE UNIVERSE OF MARVEL
      </h1>
      {comics.results.map((char, i) => {
        return (
          <Link key={char.id} to={`/comics/${char.id}`}>
            <div>
              <ComicsDetails key={char.id} char={char} />
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

export default ComicsH;
