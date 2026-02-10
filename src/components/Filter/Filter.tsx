"use client";

import { useEffect, useState } from "react";
import { GenderFilter } from "@/types";
import styles from "./Filter.module.css";

interface FilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ searchQuery, setSearchQuery, selectedFilter, setSelectedFilter }) => {
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

  const filterOptions = [
    { label: "All", value: GenderFilter.All },
    { label: "Male", value: GenderFilter.Male },
    { label: "Female", value: GenderFilter.Female },
  ]

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedSearch(localSearch);
    }, 500);
    return () => clearTimeout(id);
  }, [localSearch]);

  useEffect(() => {
    setSearchQuery(debouncedSearch);
  }, [debouncedSearch])


  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={localSearch}
        placeholder="Search users by name or email"
        onChange={(e) => setLocalSearch(e.target.value)}
        aria-label="Search users by name or email"
      />
      <select aria-label="Filter by gender" className={styles.select} value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;