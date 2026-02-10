import { UserResponse } from "@/types";

const API_URL = "https://dummyjson.com/users";

export const fetchUsers = async (page: number, limit: number): Promise<UserResponse> => {
  const skip = (page - 1) * limit;
  const response = await fetch(`${API_URL}?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};