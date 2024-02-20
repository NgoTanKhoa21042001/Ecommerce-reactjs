import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItem] = useState([]);
  const [selectCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
        setFilteredItem(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(products, "products");

  //filtered Item

  const filteItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilteredItem(filtered);
    setSelectedCategory(category);
  };
  // show all
  const showAllProduct = () => {
    setFilteredItem(products);
    setSelectedCategory("all");
  };

  // sort
  const handleSortChange = (option) => {
    setSortOption(option);
    // logic for sorting
    let sortItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItem(sortItems);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <div className="title">Our subcribe to the newsletter</div>

      {/* product card */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* all btn */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={showAllProduct}>All products</button>
            <button onClick={() => filteItems("Dress")}>Clothing</button>
            <button onClick={() => filteItems("Hoodies")}>Hoodies</button>
            <button onClick={() => filteItems("Bag")}>Bag</button>
          </div>
          {/* sorting option */}
          <div className="flex justify-end mb-4">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
        <Cards filteredItems={filteredItems} />
      </div>
    </div>
  );
};

export default Products;
