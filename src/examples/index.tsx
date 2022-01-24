import React from 'react';
import ReactDOM from 'react-dom';
import ImagesProvider from '../providers/ImagesProvider/ImagesProvider';
import Thumbnails from '../components/Thumbnails/Thumbnails';
import ThumbnailOptionsProvider from '../providers/ThumbnailOptionsProvider/ThumbnailOptionsProvider';

const Example = () => {
  return (
    <div className="react-product-image">
      <ImagesProvider
        options={{ maxImagesCount: 5 }}
        urls={[
          'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=634&q=80',
          'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=800&q=80',
          'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=658&q=80',
          'https://images.unsplash.com/photo-1642948816628-9b457871592d?w=800&q=80'
        ]}
      >
        <ThumbnailOptionsProvider defaults={{ size: 'small', shape: 'square', shadow: false, border: false }}>
          <Thumbnails />
        </ThumbnailOptionsProvider>
      </ImagesProvider>
    </div>
  );
};

ReactDOM.render(<Example />, document.getElementById('root'));
