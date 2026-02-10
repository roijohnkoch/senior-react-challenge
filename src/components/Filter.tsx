"use client";

import { useEffect, useState } from "react";
import styles from "./Filter.module.css";

interface FilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Filter: React.FC<FilterProps> = ({ searchQuery, setSearchQuery }) => {
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

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
      />
    </div>
  );
}

export default Filter;