import React, { useEffect } from "react";
import { useLoading } from "../Context/loadingContext";
import Loader from "./Loading";

const ImageListItem = ({ imageUrl, author }) => {
  const { isLoading } = useLoading();

  useEffect(()=> {
    console.log(isLoading)
  },[isLoading])
  return (
    <li className="max-w-[500px]">
      <h3>{author}</h3>
      <img src={imageUrl} alt={author} />
    </li>
  );
};

export default ImageListItem;
