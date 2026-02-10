"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api";
import Table from "@/components/Table";

const Page = () => {
  const { data } = useQuery({
    queryKey: ["users", 1, 10],
    queryFn: () => fetchUsers(1, 10),
  });

  return (
    <>
      <Table users={data?.users || []} />
    </>
  );
}

export default Page;