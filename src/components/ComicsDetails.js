import React from "react";
import Im from "../img/bgcc.jpeg";
import Im1 from "../img/bgc1.jpg";

const ComicsDetails = ({ char }) => {
  return (
    <div>
      <div className="card-full">
        <div className="item-div ">
          <div className="titre-card">{char.title}</div>
          <div className="char-i">
            <img
              src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicsDetails;
