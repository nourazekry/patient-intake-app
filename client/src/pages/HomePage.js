import React from "react";
import { useEffect, useState } from "react";
function HomePage() {
  const [data, setData] = React.useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
        <p>{!data ? "Loading..." : data}</p>
  );
}

export default HomePage;
