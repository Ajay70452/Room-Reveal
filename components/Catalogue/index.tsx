"use client";
import BackBtn from "@/components/Button/BackBtn";
import H2 from "@/components/HtmlBasics/H2";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import Card from "./Card";

const Catalogue = ({ serverCatalogues }: { serverCatalogues: Catalogue[] }) => {
  // console.log(serverCatalogues)
  const [catalogues, setCatalogues] = useState<Catalogue[] | null>(null);
  const [searchedCatalogues, setSearchedCatalogues] = useState<
    Catalogue[] | []
  >([]);
  const [loading, setLoading] = useState(true);

  // Function to filter catalogs (optimized):
  const searchCatalogue = (searchParams: string) => {
    if (!searchParams || searchParams.length === 0) {
      setSearchedCatalogues([]);
      return;
    }

    const searchFiltered = catalogues?.filter((catalogue) =>
      catalogue.name.toLowerCase().includes(searchParams.toLowerCase()),
    );
    setSearchedCatalogues(searchFiltered || []); // Handle potential undefined 'catalogues'
  };

  // Initialize state with server catalogs for smooth transition:
  useEffect(() => {
    setCatalogues(serverCatalogues);
    setLoading(false);
  }, [serverCatalogues]);

  return (
    <div className="h-screen w-full">
      <div className="fixed top-0 z-20 w-full bg-white">
        <div className="relative z-30 m-3 w-fit">
          <BackBtn color={"black"} />
        </div>
        <div className="mx-5">
          <H2 className="text-black">Catalogue</H2>
          <SearchBar onSearch={searchCatalogue} />
        </div>
      </div>
      <div className="mt-40 w-full">
        <div className="grid grid-cols-2 gap-3 px-8 py-6 md:grid-cols-2 lg:grid-cols-3">
          {searchedCatalogues.length === 0 ? (
              !catalogues || catalogues.length === 0 ? (
              <div className="absolute flex items-center justify-center">
                <p className="w-full text-lg font-semibold text-black">
                  No Catalogue Available
                </p>
              </div>
            ) : (
              catalogues &&
              catalogues.map((catalogue: Catalogue) => (
                <Card key={catalogue.id} catalogue={catalogue} />
              ))
            )
          ) : (
            searchedCatalogues.map((catalogue: Catalogue) => (
              <Card key={catalogue.id} catalogue={catalogue} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
