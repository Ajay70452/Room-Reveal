"use client"
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

interface ImageData {
  imageData: File | null; // Type for the selected file
  // You can add other properties if needed
}

const ImageDataContext = createContext<ImageData>({imageData : null});

export const ImageDataProvider: React.FC<{children : ReactNode}> = ({children}) => {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (imageData) {
      router.push('/dashboard/image-editor'); // Navigate to image editor page
    }
  }, [imageData, router]);

  // Provide the context value
  const contextValue: ImageData = {
    imageData ,
    setImageData
    // Add other methods or properties as needed
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
