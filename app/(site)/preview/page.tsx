import Catalogue from "@/components/Catalogue";
import React from "react";

//remove this catalogues and replace with the actual type of the catalogue and remember to change type of Catalogue to the actual type
const initialCatalogue = [
  {
      id: 1,
      name: "Catalogue 1",
      description: "This is the first catalogue",
      image: "/images/auth/login-background2.jpg",
    },
    {
      id: 2,
      name: "Catalogue 2",
      description: "This is the second catalogue",
      image: "/images/auth/login-background2.jpg",
    },
    {
      id: 3,
      name: "Catalogue 3",
      description: "This is the third catalogue",
      image: "/images/auth/login-background2.jpg",
    },
    {
      id: 4,
      name: "Catalogue 4",
      description: "This is the fourth catalogue",
      image: "/images/auth/login-background2.jpg",
    },
    {
      id: 5,
      name: "Catalogue 5",
      description: "This is the fifth catalogue",
      image: "/images/auth/login-background2.jpg",
    },
    {
      id: 6,
      name: "Catalogue 6",
      description: "This is the sixth catalogue",
      image: "/images/auth/login-background2.jpg",
    },
    {
      id: 7,
      name: "Catalogue 7",
      description: "This is the seventh catalogue",
      image: "/images/auth/login-background2.jpg",
    },
    {
      id: 8,
      name: "Catalogue 8",
      description: "This is the eighth catalogue",
      image: "/images/auth/login-background2.jpg",
    },
    {
      id: 9,
      name: "Catalogue 9",
      description: "This is the ninth catalogue",
      image: "/images/auth/login-background2.jpg",
    },
    {
      id: 10,
      name: "Catalogue 10",
      description: "This is the tenth catalogue",
      image: "/images/auth/login-background2.jpg",
    },
];

const page = async() => {
  const fetchCatalogues: () => Promise<Catalogue[]> = async () => {
    //fetch catalogues from the server
    await new Promise(resolve => setTimeout(resolve, 3000));
    return initialCatalogue;
  }
  
  const serverCatalogues = await fetchCatalogues();

  return (
    <Catalogue serverCatalogues={serverCatalogues}/>
  );
};

export default page;