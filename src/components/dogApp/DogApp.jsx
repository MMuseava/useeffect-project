import React, { useState, useEffect } from "react";
import DogCard from "../dogCard/DogCard";
import { v4 as uuidv4 } from "uuid";
import "./dogApp.style.css";

const url = "https://dog.ceo/api/breeds/image/random";

const DogApp = () => {
  const [dogImageList, setDogImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDog = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setDogImageList([
        ...dogImageList,
        { url: data.message, id: uuidv4(), likes: 0 },
      ]);
      setIsLoading(false);
    } catch (err) {
      console.log("error", err);
    }
  };

  const onDeleteHandler = (id) => {
    setDogImageList(dogImageList.filter((dog) => dog.id !== id));
  };

  const onLikeHandler = (id) => {
    setDogImageList(
      dogImageList.map((dog) =>
        dog.id === id ? { ...dog, likes: dog.likes + 1 } : dog
      )
    );
  };

  useEffect(() => {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setDogImage(data.message));
    getDog();
  }, []);

  return (
    <div>
      <button onClick={getDog}>{isLoading ? "loading..." : "Get Dog"}</button>
      <div className="container">
        {dogImageList.map((dog) => (
          <DogCard
            key={dog.id}
            id={dog.id}
            url={dog.url}
            likes={dog.likes}
            onDeleteHandler={onDeleteHandler}
            onLikeHandler={onLikeHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default DogApp;