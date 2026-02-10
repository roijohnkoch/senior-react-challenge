"use client";

import { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api";
import Table from "@/components/Table";
import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";
import Error from "@/components/Error";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["users", currentPage, 10, { searchQuery }],
    queryFn: () => fetchUsers(currentPage, 10, searchQuery),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (data?.total) {
      setTotalPages(Math.ceil(data.total / 10));
    }
  }, [data?.total]);

  useEffect(() => {
    if (data?.users.length === 0) {
      setCurrentPage(1);
      setTotalPages(1);
    }
  }, [data?.users]);

  const filteredUsers = useMemo(() => {
    return data?.users.filter((user) => selectedFilter === "all" || user.gender === selectedFilter) || [];
  }, [data?.users, selectedFilter]);

  if (isError) {
    return <Error onRetry={refetch} message="Failed to load users." />;
  }

  return (
    <>
      <Filter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}  
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Table users={filteredUsers} setSelectedUser={setSelectedUserId} isLoading={isLoading} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <Modal
        userId={selectedUserId}
        isOpen={selectedUserId !== null}
        onClose={() => setSelectedUserId(null)}
      />
    </>
  );
}

export default Page;