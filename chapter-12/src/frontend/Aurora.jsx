import { API } from "@aws-amplify/api";
import { useEffect, useState } from "react";

import { listUsers } from "../graphql/queries";

export function Aurora() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await API.graphql({
        query: listUsers,
      });
      const usersData = response.data.listUsers;
      setUsers(usersData);
    } catch (err) {
      console.log("error fetching users...", err);
    }
  }

  return (
    <div>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <p>name={user.name}</p>
            <p>description={user.age}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
