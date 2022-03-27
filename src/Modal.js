import React, { useEffect, useState } from "react";
import "./Modal.css";
import { ImCross } from "react-icons/im";

const Modal = ({ title, description, genre, avatar }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <div className="modalBackground">
          <div className="modalContainer">
            <ImCross
              className="modalCrossIcon"
              onClick={() => {
                setShow(false);
              }}
            />
            <div className="modalHeader">
              <img className="modalImg" src={avatar} alt="logo" />
              {title}
            </div>
            <div className="modalDescription">
              {description}
              {description}
              {description}
              {description}
              {description}
              {description}
            </div>
            <div className="modalGenre">{genre || "N/A"}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
