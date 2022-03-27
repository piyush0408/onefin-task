import React, { useState } from "react";
import Modal from "./Modal";
import "./MovieCard.css";
// import avatar from "./favicon.png";

const MovieCard = ({ title, description, genre }) => {
  const [show, setShow] = useState(false);
  const avatar = `https://ui-avatars.com/api/${title}`;
  // useEffect(() => {}, [show]);

  return (
    <div
      className="cardContainer"
      onClick={() => {
        setShow(true);
      }}
    >
      <div className="header">
        <img className="cardAvatar" src={avatar} alt="avatar" />
        <div>{title}</div>
      </div>
      <div className="description">{description}</div>
      <div className="genre">{genre || "N/A"}</div>
      {/* {console.log("\n\nshow", show)} */}

      {show && (
        <Modal
          title={title}
          description={description}
          genre={genre}
          avatar={avatar}
        />
      )}
    </div>
  );
};

export default MovieCard;
