"use client"
import React, { ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
interface ImageData {
  imageData: File | null;
  setImageData: (imageData: File | null) => void;
  editedImage: File | null;
  setEditedImage: (editedImage: File | null) => void;
}

const ImageDataContext = createContext<ImageData>({
  imageData: null,
  setImageData: () => {},
  editedImage: null,
  setEditedImage: () => {},
});

export const ImageDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [imageData, setImageData] = useState<File | null>(null);
  const [editedImage, setEditedImage] = useState<File | null>(null);

  const contextValue: ImageData = {
    imageData,
    setImageData,
    editedImage,
    setEditedImage,
  };

  return (
    <ImageDataContext.Provider value={contextValue}>
      {children}
    </ImageDataContext.Provider>
  );
};

export const useImageData = () => {
  const context = useContext(ImageDataContext);
  if (!context) {
    throw new Error('useImageData must be used within ImageDataProvider');
  }
  return context;
};
