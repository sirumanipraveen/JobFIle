

import { useEffect } from "react";

function ErrorHandling() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Error Handling</h1>
    </>
  );
}

export default ErrorHandling;
