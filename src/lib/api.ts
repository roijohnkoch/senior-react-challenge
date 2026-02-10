import { UserResponse } from "@/types";

const API_URL = "https://dummyjson.com/users";

export const fetchUsers = async (page: number, limit: number, searchQuery?: string): Promise<UserResponse> => {
  const skip = (page - 1) * limit;
  const query = searchQuery ? `/search?q=${searchQuery}&limit=${limit}&skip=${skip}` : `?limit=${limit}&skip=${skip}`;
  const response = await fetch(`${API_URL}${query}`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

export const fetchUserById = async (id: number) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
}