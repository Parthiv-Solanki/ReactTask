import "./App.css";
import { useState } from "react";
import Filters from "./components/Filters";
import Table from "./components/Table";
import { Data } from "./data";

function App() {
  const [data, setData] = useState(Data);
  const initialFilters = Data[0].name
    ? { name: "", city: [], category: [], type: [], active: [] }
    : { mall: "", address: [], category: [], rating: [] };
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const handleCheckboxChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const currentFilter = prevFilters[filterType];
      const newFilter = currentFilter.includes(value)
        ? currentFilter.filter((item) => item !== value)
        : [...currentFilter, value];
      return { ...prevFilters, [filterType]: newFilter };
    });
  };

  const filteredData = data.filter((item) => {
    if (item.name) {
      return (
        (filters.name === "" || item.name.includes(filters.name)) &&
        (filters.city.length === 0 || filters.city.includes(item.city)) &&
        (filters.category.length === 0 ||
          filters.category.includes(item.category)) &&
        (filters.type.length === 0 || filters.type.includes(item.type)) &&
        (filters.active.length === 0 || filters.active.includes(item.active))
      );
    } else {
      return (
        (filters.mall === "" || item.mall.includes(filters.mall)) &&
        (filters.address.length === 0 ||
          filters.address.includes(item.address)) &&
        (filters.category.length === 0 ||
          filters.category.includes(item.category)) &&
        (filters.rating.length === 0 || filters.rating.includes(item.rating))
      );
    }
  });

  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">React Assessment Task</h1>
      <Filters
        filters={filters}
        onFilterChange={handleFilterChange}
        onCheckboxChange={handleCheckboxChange}
        data={data}
      />
      <Table data={filteredData} />
    </div>
  );
}

export default App;
