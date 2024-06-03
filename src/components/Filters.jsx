import React from "react";

function Filters({ filters, onFilterChange, onCheckboxChange, data }) {
  const uniqueValues = (key) => [
    ...new Set(data.map((item) => item[key]).filter(Boolean)),
  ];

  return (
    <div className="flex justify-center items-center mb-4">
      {data[0].name ? (
        <>
          <div className="mb-2 mx-3 border-2 border-black p-5">
            <p className="font-semibold">City:</p>
            {uniqueValues("city").map((city) => (
              <label key={city} className="block">
                <input
                  type="checkbox"
                  checked={filters.city.includes(city)}
                  onChange={() => onCheckboxChange("city", city)}
                  className="mr-2"
                />
                {city}
              </label>
            ))}
          </div>
          <div className="mb-2 mx-3 border-2 border-black p-5">
            <p className="font-semibold">Category:</p>
            {uniqueValues("category").map((category) => (
              <label key={category} className="block">
                <input
                  type="checkbox"
                  checked={filters.category.includes(category)}
                  onChange={() => onCheckboxChange("category", category)}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
          <div className="mb-2 mx-3 border-2 border-black p-5">
            <p className="font-semibold">Type:</p>
            {uniqueValues("type").map((type) => (
              <label key={type} className="block">
                <input
                  type="checkbox"
                  checked={filters.type.includes(type)}
                  onChange={() => onCheckboxChange("type", type)}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
          <div className="mb-2 mx-3 border-2 border-black p-5">
            <p className="font-semibold">Active:</p>
            {uniqueValues("active").map((active) => (
              <label key={active} className="block">
                <input
                  type="checkbox"
                  checked={filters.active.includes(active)}
                  onChange={() => onCheckboxChange("active", active)}
                  className="mr-2"
                />
                {active}
              </label>
            ))}
          </div>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={filters.name}
              onChange={(e) => onFilterChange("name", e.target.value)}
              className="mb-2 p-2 border border-gray-300 rounded"
            />
          </div>
        </>
      ) : (
        <>
          <div className="mb-2 mx-3 border-2 border-black p-5">
            <p className="font-semibold">Address:</p>
            {uniqueValues("address").map((address) => (
              <label key={address} className="block">
                <input
                  type="checkbox"
                  checked={filters.address.includes(address)}
                  onChange={() => onCheckboxChange("address", address)}
                  className="mr-2"
                />
                {address}
              </label>
            ))}
          </div>
          <div className="mb-2 mx-3 border-2 border-black p-5">
            <p className="font-semibold">Category:</p>
            {uniqueValues("category").map((category) => (
              <label key={category} className="block">
                <input
                  type="checkbox"
                  checked={filters.category.includes(category)}
                  onChange={() => onCheckboxChange("category", category)}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
          <div className="mb-2 mx-3 border-2 border-black p-5">
            <p className="font-semibold">Rating:</p>
            {uniqueValues("rating").map((rating) => (
              <label key={rating} className="block">
                <input
                  type="checkbox"
                  checked={filters.rating.includes(rating)}
                  onChange={() => onCheckboxChange("rating", rating)}
                  className="mr-2"
                />
                {rating}
              </label>
            ))}
          </div>
          <div>
            <input
              type="text"
              placeholder="Mall"
              value={filters.mall}
              onChange={(e) => onFilterChange("mall", e.target.value)}
              className="mb-2 p-2 border border-gray-300 rounded"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Filters;
