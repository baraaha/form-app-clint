import React from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";

function Users() {
  const { response: data, error, isLoading } = useAxios("brand");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Users</h2>
        <ul>
          {data.data.map((user) => (
            <li
              key={user.id}
              className="bg-white shadow rounded-lg p-4 mb-4 flex items-center"
            >
              <img
                src={`https://avatars.dicebear.com/api/avataaars/${user.name}.svg`}
                alt="User Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <Link
                  to={`/users/${user.id}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Profile
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default Users;
