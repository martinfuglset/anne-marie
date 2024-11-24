import React, { useEffect, useState } from 'react';

export default function Carousel({ folders }) {
  const [validImages, setValidImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImages, setPreviousImages] = useState([]); // Store previous images
  const [isLoading, setIsLoading] = useState(true);

  // Define a variable for responsive height
  const DYNAMIC_HEIGHT = "h-[500px] sm:h-[800px]"; // 200px on mobile, 800px on desktop

  useEffect(() => {
    async function fetchImages() {
      try {
        const folderArray = Array.isArray(folders) ? folders : [folders];

        const imagePromises = folderArray.map(async (folder) => {
          const response = await fetch(`/api/images?folder=${folder}`);
          if (!response.ok) throw new Error(`Failed to fetch images from folder: ${folder}`);
          return response.json();
        });

        const imagesFromAllFolders = (await Promise.all(imagePromises)).flat();

        setPreviousImages(validImages); // Save current images as previous images
        setValidImages(imagesFromAllFolders);
        setIsLoading(false); // Mark loading as complete
      } catch (error) {
        console.error('Error fetching images:', error);
        setValidImages([]);
        setIsLoading(false);
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
    <div className={`relative w-full ${DYNAMIC_HEIGHT} overflow-hidden`}>
      {isLoading && previousImages.length > 0 ? (
        previousImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))
      ) : validImages.length > 0 ? (
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
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">No images found</p>
        </div>
      )}
    </div>
  );
}
