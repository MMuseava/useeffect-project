import React from "react";
import "./dogCard.style.css";

const DogCard = ({ onDeleteHandler, onLikeHandler, id, url, likes }) => {
  return (
    <div className="main">
      <img src={url}></img>
      <button onClick={() => onLikeHandler(id)}>❤️</button>
      <p>{likes}</p>
      <button onClick={() => onDeleteHandler(id)}>X</button>
    </div>
  );
};

export default DogCard;