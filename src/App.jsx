import NavBar from "./components/NavBar";
import GridBox from "./components/GridBox";
import Loading from "./components/Loading";
import "./styles/App.css";
import React from "react";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  const getUsers = () => {
    setLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  };
  console.log(loading);
  console.log(data);
  return (
    <div>
      <NavBar getUsers={getUsers} />
      <div className="flex__grid">
        {loading && <Loading />}
        {!loading && data.length === 0 && (
          <h3>Click "Get Users" to load customer details.</h3>
        )}
        {!loading &&
          data.length !== 0 &&
          data.map((user) => (
            <GridBox
              avatar={user.avatar}
              id={user.id}
              email={user.email}
              first_name={user.first_name}
              last_name={user.last_name}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
