import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

import "./dogCard.style.css";


const DogCard = ({ onDeleteHandler, onLikeHandler, onDislikeHandler, id, url, likes, dislike }) => {
  return (
      <div className="container">
          <div className="main">
              <img src={url} alt="dog"></img>
          <div className="all-btn">
              <button className="like-btn" onClick={() => onLikeHandler(id)}><SlLike /></button>
                  <p>{likes}</p>
                  
              <button className="like-btn" onClick={() => onDislikeHandler(id)}><SlDislike /></button>
                  <p>{dislike }</p>
                  <button className="clear-btn" onClick={() => onDeleteHandler(id)}>X</button>

                 
                  
                  
          </div>
          </div>
    </div>
  );
};

export default DogCard;