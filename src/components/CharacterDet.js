import React, { useState } from "react";
import Im from "../img/bgcc.jpeg";
import Hulk from "../img/1.png";

const CharacterDet = ({ char }) => {
  return (
    <div>
      <div className="card-full">
        <div className="item-div ">
          <div className="char-i">
            <div className="imm">
              <img
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterDet;
