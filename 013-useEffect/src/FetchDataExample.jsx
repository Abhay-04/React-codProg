import React, { useState } from "react";
import { useEffect } from "react";
import User from "./User";

const URL = "https://jsonplaceholder.typicode.com/users";
function FetchDataExample() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg , setErrorMsg] = useState("")

  const fetchData = async () => {
    const response = await fetch(URL);
    if (!(response.status >= 200 && response.status <= 299)) {
      setIsError(true);
      setErrorMsg(`${response.status} Error`)
      setIsLoading(false);
      return;
    }
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{errorMsg}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default FetchDataExample;
