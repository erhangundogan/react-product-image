import React from 'react';
import ReactDOM from 'react-dom';
import ImagesProvider from '../providers/ImagesProvider/ImagesProvider';
import ProductImages from '../components/ProductImages/ProductImages';
import './main.css';

const Example = () => {
  return (
    <ImagesProvider
      thumbUrls={[
        'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=334&q=80',
        'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=300&q=80',
        'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=358&q=80',
        'https://images.unsplash.com/photo-1642948816628-9b457871592d?w=300&q=80',
        'https://images.unsplash.com/photo-1642965961298-02f31304044d?w=300&q=80'
      ]}
      imageUrls={[
        'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=1334&q=80',
        'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=1300&q=80',
        'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=1358&q=80',
        'https://images.unsplash.com/photo-1642948816628-9b457871592d?w=1300&q=80',
        'https://images.unsplash.com/photo-1642965961298-02f31304044d?w=1300&q=80'
      ]}
    >
      <div className="image-container">
        <ProductImages />
        <div className="product-content-container">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius mauris eu nisi molestie, ut dapibus mi bibendum. Sed vehicula purus quam, sit amet lobortis augue molestie non. Donec volutpat ligula vitae nisl elementum lobortis. Maecenas ac metus varius, rhoncus dui ut, gravida lectus. Vestibulum purus massa, tristique vel nulla in, ullamcorper sagittis lorem. Etiam suscipit neque quis fringilla tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non ipsum augue. Fusce nec orci metus. Pellentesque lacinia urna sed libero accumsan tincidunt. Aliquam aliquet nibh tellus, id feugiat erat suscipit ac. In sit amet maximus enim, sit amet gravida ligula. Ut ornare, neque id cursus aliquet, tellus ante faucibus nisi, et bibendum leo magna sed odio.
          </p>
          <p>
            Mauris placerat consectetur augue, vel tristique urna aliquam quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eu urna malesuada, tempor mi luctus, faucibus massa. Phasellus tincidunt lacus ut nisi pharetra, vitae congue dui congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque in orci ullamcorper, varius diam et, blandit orci. Aliquam in ultrices ipsum, id venenatis sapien. Pellentesque malesuada dui in nulla tincidunt, a pretium magna consequat. Proin odio arcu, dapibus a nibh sit amet, dapibus pulvinar quam.
          </p>
          <p>
            <strong>Praesent bibendum vel eros eget porttitor.</strong>
          </p>
        </div>
      </div>
    </ImagesProvider>
  );
};

ReactDOM.render(<Example />, document.getElementById('root'));
