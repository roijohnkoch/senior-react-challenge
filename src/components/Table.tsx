import { User } from "@/types";
import styles from "./Table.module.css";

interface TableProps {
  users: User[];
}

const Table: React.FC<TableProps> = ({ users }) => {
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
          <tr key={user.id}>
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