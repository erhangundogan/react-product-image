import { PropsWithChildren } from 'react';

export interface ImagesProviderContextType {
  images: any[];
  setSelectedImageIndex: any;
  selectedImageIndex: number;
  thumbUrls: string[];
  imageUrls: string[];
  options: ImageProviderOptionsType;
}

export interface VerifyUrlsOptionsType {
  maxFileSize?: number;
  ignoreRequestErrors?: boolean;
  testUrls?: boolean;
  requiredOrigin?: string | undefined;
}

export interface FetchImagesOptionsType {
  tryCors?: boolean;
  failEarly?: boolean;
}

export interface FetchImagesCorsOptionsType {
  generateHash?: boolean;
  fetchOptions?: RequestInit;
}

export interface ImageProviderOptionsType {
  verifyUrlsOptions?: VerifyUrlsOptionsType;
  fetchImagesOptions?: FetchImagesOptionsType;
  fetchImagesCorsOptions?: FetchImagesCorsOptionsType;
}

export interface ImageProviderPropsType extends PropsWithChildren<any> {
  urls?: string[];
  options?: ImageProviderOptionsType;
}
