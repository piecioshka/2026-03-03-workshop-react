import { useEffect, useState } from "react";

function parsePhotos(photos) {
  const images = [];
  photos.forEach((photo) => {
    images.push(photo.imageUrl);
  });
  return images;
}

export function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://fakes.piecioshka.dev/photos")
      .then((response) => response.json())
      .then((x) => {
        // console.log(x);
        setImages(parsePhotos(x));
      });
  }, []);

  return (
    <div className="photo-gallery">
      {images.map((image) => (
        <img src={image} />
      ))}
    </div>
  );
}
