import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ProductFilterSidebar from "./ProductFilterSidebar";

function Products() {
  const [data, setData] = useState([]); // Original Data
  const [filteredData, setFilteredData] = useState([]); // Filtered Data
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState({
    category: "",
    price: 500,
    rating: 0
  });

  // Handle Filter Changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  // Fetch Data
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log("Products fetched:", response.data);
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Apply Filters
  const applyFilters = (filters) => {
    const filtered = data.filter((item) => {
      const matchesCategory =
        !filters.category || item.category === filters.category;

      const matchesPrice = item.price <= filters.price;

      const matchesRating =
        !filters.rating || Math.round(item.rating.rate) >= filters.rating;

      return matchesCategory && matchesPrice && matchesRating;
    });

    setFilteredData(filtered);
  };

  // Handle Loading State
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
    <div className=" flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-3/12 p-4">
        <ProductFilterSidebar onFilterChange={handleFilterChange} />
      </div>

      {/* Product Listing */}
      <div className="md:w-9/12 p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Products
        </h1>

        {error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : filteredData.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredData.map((item, index) => (
              <Link to={`/products/${item.id}`} key={index}>
                <ProductCard
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  className="hover:shadow-lg transition-shadow duration-300"
                />
              </Link>
            ))}
          </ul>
        ) : (
          <div className="text-center text-gray-500">
            No products match the filters.
          </div>
        )}
      </div>

      
      </div>
      <Footer />
    </>
  );
}

export default Products;
