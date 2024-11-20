import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext"
import Button from "../elements/button/Button";
import { BiMenu } from "react-icons/bi";
import axios from "axios";
import BookCard from "../fragments/BookCard";

const MainContent = () => {

    const {
        searchQuery,
        selectedCategory,
        minPrice,
        maxPrice,
        keyword
    } = useFilter();

    const [products, setProducts] = useState<any[]>([]);
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const itemsPerPage = 12;

    // fecthing data api
    useEffect(() => {
        let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`

        if (keyword) {
            url = `https://dummyjson.com/products/search?q=${keyword}`
        }

        axios.get(url).then((response) => {
            setProducts(response.data.products);
            // console.log("Ini data product : ", response.data.products);
        })
            .catch((error) => {
                console.error("Error fetching data", error)
            })
    }, [currentPage, keyword]);

    // filter product
    const getFilteredProducts = () => {
        let filteredProducts = products;

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(
                (product) => product.category === selectedCategory
            );
            // console.log(filteredProducts)
        }

        if (minPrice != undefined) {
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice)
        }

        if (maxPrice != undefined) {
            filteredProducts = filteredProducts.filter(product => product.price >= maxPrice)
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }

        switch (filter) {
            case "expensive":
                return filteredProducts.sort((a, b) => b.price - a.price);
            case "cheap":
                return filteredProducts.sort((a, b) => b.price - a.price);
            case "popular":
                return filteredProducts.sort((a, b) => b.rating - a.rating);
            default:
                return filteredProducts
        }
    }

    const filteredProducts = getFilteredProducts();
    console.log('Data filter product : ', filteredProducts)

    return (
        <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5">
            <div className="mb-5">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="relative mb-5 mt-5">
                        <Button className="rounded-full flex items-center">
                            <BiMenu size={25} className="mr-5" />

                            {filter === 'all' ? "Filter" : filter.charAt(0).toLowerCase() + filter.slice(1)}
                        </Button>

                        {dropdownOpen && (
                            <div className="absolute bg-white border-gray-300 rounded mt-2 w-full sm:w-40">
                                <Button
                                    onClick={() => setFilter("cheap")}
                                    className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                                >
                                    Cheap
                                </Button>

                                <Button
                                    onClick={() => setFilter("expensive")}
                                    className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                                >
                                    Expensive
                                </Button>

                                <Button
                                    onClick={() => setFilter("popular")}
                                    className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                                >
                                    Popular
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {/* BookCard */}
                    {filteredProducts.map(product => (
                        <BookCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            image={product.thumbnail}
                            price={product.price}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default MainContent