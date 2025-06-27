import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./UserCard ";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [serchValue,setSearchValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);


  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setFilteredUsers(data)
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

useEffect(() =>{
 const filtered = users.filter(user =>
  user.name.toLowerCase().includes(serchValue.toLowerCase())
);
  setFilteredUsers(filtered)
},[serchValue,users])

  if (error) {
    return <p className="error">{error}</p>;
  }
  return (
    <>
      <div>
        <h2>User Profiles</h2>
         <input
        type="text"
        placeholder="Search users by name..."
        value={serchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      </div>

      
      

      <div>
        {loading ? (
          <p>Loading users...</p>
        ) : filteredUsers.length === 0 ? (
          <p>No Users Found</p>
        ) : (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              city={user.address.city}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
