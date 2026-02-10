import { User } from "@/types";
import Loading from "./Loading";
import styles from "./Table.module.css";

interface TableProps {
  users: User[];
  setSelectedUser: (user: number | null) => void;
  isLoading?: boolean;
}

const Table: React.FC<TableProps> = ({ users, setSelectedUser, isLoading = false }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan={3}>
              <Loading />
            </td>
          </tr>
        ) : users.length === 0 ? (
          <tr>
            <td colSpan={3}>
              <div className={styles.noUsersFound}>No users found.</div>
            </td>
          </tr>
        ) : (
          users.map((user) => (
            <tr key={user.id} onClick={() => setSelectedUser(user.id)} className="cursor-pointer hover:bg-gray-100">
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
};

export default Table;