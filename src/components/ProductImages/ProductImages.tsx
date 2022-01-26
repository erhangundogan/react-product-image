import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import Thumbnails from '../Thumbnails/Thumbnails';
import { useImages } from '../../providers/ImagesProvider/ImagesProvider';

const ProductImages = ({ children }) => {
  const { images, imageUrls, selectedImageIndex } = useImages();
  const { width, height } = images[selectedImageIndex] || {};
  let magnificationSize = {};
  if (width && height) {
    const ratio = width / height;
    magnificationSize = {
      enlargedImageContainerDimensions: {
        width: ratio === 1 ? '125%' : ratio > 1 ? '125%' : '100%',
        height: ratio === 1 ? '125%' : ratio < 1 ? '125%' : '100%'
      }
    };
  }

  return (
    <div className="image-container">
      <div className="thumbnail-container">
        <Thumbnails />
      </div>
      <div className="magnify-container">
        {width && height ? (
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: '',
                isFluidWidth: true,
                src: imageUrls[selectedImageIndex]
              },
              largeImage: {
                src: imageUrls[selectedImageIndex],
                width,
                height
              },
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false,
              ...magnificationSize
            }}
          />
        ) : null}
      </div>
      <div className="product-content-container">{children}</div>
    </div>
  );
};

export default ProductImages;
