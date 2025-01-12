import React, {useEffect, useState} from "react";
import Button from "../elements/button/Button";
import InputSearch from "../elements/input/InputSearch";
import InputForm from "../elements/input/InputForm";
import Label from "../elements/input/Label";
import Typography from "../elements/text/Typography";
import {useFilter} from "./FilterContext";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = ({className = ""}) => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    keyword,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  // conect api public
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );

        setCategories(uniqueCategories);
        console.log(uniqueCategories);
      } catch (error) {
        console.log("Error fetching product", error);
      }
    };

    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleRadioChangeCategories = (category: string) => {
    setSelectedCategory(category);
  };

  const hendleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div
      className={`w-64 p-5 h-screen bg-gray-200 shadow-inherit ${className}`}
    >
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-10 mt-4 text-blue-900">
        React Store
      </h1>

      {/* Search Section */}
      <section className="mb-6">
        <input
          name="search"
          className="border-2 border-gray-400 rounded-md w-auto px-4 py-2"
          placeholder="Search Product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>
      <hr className="mb-3" />

      {/* Price Range Section */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold text-gray-800">Price Range:</h2>
        <div className="flex space-x-2">
          <InputForm
            name="min"
            type="number"
            className="border-2 rounded-md px-4 py-2 w-full"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <InputForm
            name="max"
            type="number"
            className="border-2 rounded-md px-4 py-2 w-full"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-3 text-gray-800">
          Categories:
        </h2>
        <select
          className="w-full px-4 py-2 border rounded-md text-sm"
          value={selectedCategory}
          onChange={(e) => handleRadioChangeCategories(e.target.value)}
        >
          <option value="">Select a Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
      </section>

      {/* Keywords Section */}
      <section className="mb-6">
        <h2 className="text-sm font-semibold mb-3 text-gray-800">Keywords:</h2>
        <select
          className="w-full px-4 py-2 border rounded-md text-sm"
          value={keyword}
          onChange={(e) => hendleKeywordClick(e.target.value)}
        >
          <option value="">Select a Keyword</option>
          {keywords.map((keyword) => (
            <option key={keyword} value={keyword}>
              {keyword.toUpperCase()}
            </option>
          ))}
        </select>
      </section>

      {/* Reset Filters Button */}
      <button
        className="w-full py-1 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 text-sm"
        onClick={handleResetFilters}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Sidebar;
