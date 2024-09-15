import React from 'react';
import './Gallery.css'; // Import custom CSS file

const images = [
  '/gimages/image1.jpg',
  '/gimages/image2.jpg',
  '/gimages/image3.jpg',
  '/gimages/image4.jpg',
  '/gimages/image5.jpg',
  '/gimages/image6.jpg',
  '/gimages/image7.jpg',
  '/gimages/image8.jpg',
  '/gimages/image9.jpg',
  '/gimages/image10.jpg',
  '/gimages/image11.jpg',
  '/gimages/image12.jpg',
  '/gimages/image13.jpg',
  '/gimages/image14.jpg',
  '/gimages/image15.jpg',
  '/gimages/image16.jpg',
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="content-wrapper">
        <h2 className="title">Gallery</h2>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img className="gallery-image" src={src} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
