import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchImages, verifyUrls } from 'image-helpers';
import { ImageProviderPropsType, ImagesProviderContextType } from './ImageProvider.types';

export const ImagesProviderContext = createContext<ImagesProviderContextType>({} as any);
export const useImages = () => useContext(ImagesProviderContext);

const ImagesProvider = ({
  children,
  thumbUrls: defaultThumbUrls = [],
  imageUrls: defaultImageUrls = [],
  options = {}
}: ImageProviderPropsType) => {
  const [thumbs, setThumbs] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const [thumbUrls, setThumbUrls] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      if (images.length > 0) {
        setImages([]);
      }
      return;
    }

    if (thumbUrls.length === 0) {
      if (thumbs.length > 0) {
        setThumbs([]);
      }
      return;
    }

    const verifyAndFetch = async (newImageUrls) => {
      const verifiedImageUrls = await verifyUrls(newImageUrls, options.verifyUrlsOptions);
      if (Array.isArray(verifiedImageUrls) && verifiedImageUrls.length > 0) {
        return await fetchImages(
          verifiedImageUrls,
          options.fetchImagesOptions,
          options.fetchImagesCorsOptions
        );
      }
    };

    const existingImageUrls = images.map(({ url }) => url);
    const newImageUrls = imageUrls.filter((url) => !existingImageUrls.includes(url));
    if (newImageUrls.length === 0) {
      return;
    }
    verifyAndFetch(newImageUrls).then((newImages) => {
      if (newImages) {
        setImages((currentImages) => [...currentImages, ...newImages]);
      }
    });

    const existingThumbUrls = thumbs.map(({ url }) => url);
    const newThumbUrls = thumbUrls.filter((url) => !existingThumbUrls.includes(url));
    if (newThumbUrls.length === 0) {
      return;
    }
    verifyAndFetch(newThumbUrls).then((newThumbs) => {
      if (newThumbs) {
        setThumbs((currentThumbs) => [...currentThumbs, ...newThumbs]);
      }
    });
  }, [imageUrls, thumbUrls]);

  useEffect(() => {
    if (defaultThumbUrls.length > 0) {
      setThumbUrls(defaultThumbUrls);
    }
  }, [defaultThumbUrls]);

  useEffect(() => {
    if (defaultImageUrls.length > 0) {
      setImageUrls(defaultImageUrls);
    }
  }, [defaultImageUrls]);

  return (
    <ImagesProviderContext.Provider
      value={{ images, thumbUrls, imageUrls, options, selectedImageIndex, setSelectedImageIndex }}
    >
      {children}
    </ImagesProviderContext.Provider>
  );
};

export default ImagesProvider;
