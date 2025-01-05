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

  // Filters state
  const [filters, setFilters] = useState({
    category: "",
    price: 500,
    rating: 0,
  });

  // Sidebar visibility state (for mobile)
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Handle Filter Changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
    setIsFilterVisible(false); // Close the modal after applying filters on mobile
  };

  // Fetch Data
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      })
      .catch((err) => {
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

      // const matchesRating =
      //   !filters.rating || Math.round(item.rating.rate) >= filters.rating;

      return matchesCategory && matchesPrice // && matchesRating;
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
      <div className="flex flex-col md:flex-row relative">
        {/* Filter Sidebar */}
        <div className="hidden md:block md:w-3/12 p-4">
          <ProductFilterSidebar onFilterChange={handleFilterChange} />
        </div>

        {/* Filter Button (Visible on Mobile) */}
        <button
          className="md:hidden fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-50"
          onClick={() => setIsFilterVisible(true)}
        >
          Filters
        </button>

        {/* Sidebar Modal for Mobile */}
        {isFilterVisible && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
              <h2 className="text-xl font-bold mb-4">Apply Filters</h2>
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={() => setIsFilterVisible(false)}
              >
                ✖
              </button>
              <ProductFilterSidebar onFilterChange={handleFilterChange} />
            </div>
          </div>
        )}

        {/* Product Listing */}
        <div className="w-full md:w-9/12 p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Our Products
          </h1>

          {error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : filteredData.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item, index) => (
                <Link to={`/products/${item.slug}`} key={index}>
                  <ProductCard
                    image={item.image}
                    title={item.name}
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
