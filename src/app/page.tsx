"use client";

import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api";
import Table from "@/components/Table";
import Filter from "@/components/Filter";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const { data, isLoading } = useQuery({
    queryKey: ["users", 1, 10, { searchQuery }],
    queryFn: () => fetchUsers(1, 10, searchQuery),
    refetchOnWindowFocus: false,
  });

  const filteredUsers = useMemo(() => {
    return data?.users.filter((user) => selectedFilter === "all" || user.gender === selectedFilter) || [];
  }, [data?.users, selectedFilter])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Filter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}  
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Table users={filteredUsers} />
    </>
  );
}

export default Page;