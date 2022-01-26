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
      <ProductImages>
        <div>
          <h1>Terms and Privacy Policy</h1>
          <p>
            The following terms and conditions govern all use of the WebsitePolicies.com website and all
            content, services, and products available through the website, including, but not limited to, the
            client area (collectively referred to as the Site).
          </p>
          <p>
            The Site is owned and operated by VLD Interactive Inc. (collectively referred to as the Operator).
            The Site is offered subject to your acceptance without modification of all of the terms and
            conditions contained herein and all other operating rules, policies including, without limitation,
            the Operator's privacy policy and procedures that may be published from time to time on this Site
            by the Operator (collectively, the "Agreement").
          </p>
          <p>
            Please read this Agreement carefully before accessing or using the Site. By accessing or using any
            part of the website, you agree to become bound by the terms and conditions of this agreement. If
            you do not agree to all the terms and conditions of this agreement, then you may not access the
            Site or use any services. The Site is available only to individuals who are at least 13 years old.
          </p>
        </div>
      </ProductImages>
    </ImagesProvider>
  );
};

ReactDOM.render(<Example />, document.getElementById('root'));
