"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api";

const Page = () => {
  const { data } = useQuery({
    queryKey: ["users", 1, 10],
    queryFn: () => fetchUsers(1, 10),
  });

  console.log(data);

  return <div>Welcome to the Home Page</div>;
}

export default Page;