import React from 'react';
import { useImages } from '../../providers/ImagesProvider/ImagesProvider';

const Thumbnails = () => {
  const { images, setSelectedImageIndex } = useImages();

  return (
    <div className="thumbnails">
      {images?.map((image, index) => (
        <div key={index} className="thumbnail">
          <img
            src={image?.dataUrl || image?.url}
            alt=""
            onError={(event) =>
              console.error('Cannot render thumbnail of', (event.target as HTMLImageElement).src)
            }
            onClick={() => setSelectedImageIndex(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
