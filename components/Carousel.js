import React, { useEffect, useState } from 'react';

export default function Carousel({ folders }) {
  const [validImages, setValidImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function fetchImages() {
      try {
        // Convert folders to an array if a single folder is passed as a string
        const folderArray = Array.isArray(folders) ? folders : [folders];

        const imagePromises = folderArray.map(async (folder) => {
          const response = await fetch(`/api/images?folder=${folder}`);
          if (!response.ok) throw new Error(`Failed to fetch images from folder: ${folder}`);
          return response.json();
        });

        // Combine images from all folders
        const imagesFromAllFolders = (await Promise.all(imagePromises)).flat();
        setValidImages(imagesFromAllFolders);
      } catch (error) {
        console.error('Error fetching images:', error);
        setValidImages([]);
      }
    }

    fetchImages();
  }, [folders]);

  useEffect(() => {
    if (validImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % validImages.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [validImages]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {validImages.length > 0 ? (
        validImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No images found</p>
      )}
    </div>
  );
}
