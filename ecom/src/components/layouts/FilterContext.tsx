import React, {createContext, useState, ReactNode, useContext} from 'react'

// Definisikan tipe untuk nilai di context
interface FilterContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    minPrice: number | undefined;
    setMinPrice: (price: number | undefined) => void;
    maxPrice: number | undefined;
    setMaxPrice: (price: number | undefined) => void;
    keyword: string;
    setKeyword: (keyword: string) => void;
}

// buat context
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Provider
export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Definisikan state
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
    const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
    const [keyword, setKeyword] = useState<string>('');
  
    // Return provider dengan nilai context
    return (
      <FilterContext.Provider
        value={{
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
        }}
      >
        {children}
      </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (context === undefined) {
        throw new Error("useFilter must be used within a FilterProvider")
    }
    return context;
}

export default FilterContext