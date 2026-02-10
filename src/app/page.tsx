"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api";
import Table from "@/components/Table";
import Filter from "@/components/Filter";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["users", 1, 10, { searchQuery }],
    queryFn: () => fetchUsers(1, 10, searchQuery),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Filter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}  
      />
      <Table users={data?.users || []} />
    </>
  );
}

export default Page;