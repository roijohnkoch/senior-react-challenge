import { User } from "@/types";
import styles from "./Table.module.css";

interface TableProps {
  users: User[];
  setSelectedUser: (user: number | null) => void;
}

const Table: React.FC<TableProps> = ({ users, setSelectedUser }) => {
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
        {users.map((user) => (
          <tr key={user.id} onClick={() => setSelectedUser(user.id)}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default Table;