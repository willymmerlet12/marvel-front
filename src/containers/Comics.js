import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ComicsPage from "../components/ComicsPage";
import Loader from "react-loader-spinner";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [comics, setComics] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3100/comics/${id}`);

        setComics(response.data.data);

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
        <ComicsPage comics={comics.results[0]} />
      </div>
      );
    </div>
  );
};

export default Comics;
