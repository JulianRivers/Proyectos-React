import { useEffect, useState } from "react"
import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifGrid = ({ category }) => {

 const {images, isLoaging } = useFetchGif( category );
 
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image}
          />
        ))}
      </div>
    </>
  )
}
