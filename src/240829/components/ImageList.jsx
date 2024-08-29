import React from "react";
import ImageListItem from "./ImageListItem";

const ImageList = ({ data }) => {
  return (
    <>
      <h2>이미지 목록</h2>
      <ul>
        {data.map((el) => (
          <ImageListItem
            key={`${el.id}__${el.author}`}
            imageUrl={el.download_url}
            author={el.author}
          />
        ))}
      </ul>
    </>
  );
};

export default ImageList;
