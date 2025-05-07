"use client";
// react libraries
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://edm-api.vdldemo.top/games", {
          credentials: "include",
        });
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("api error", error);
      }
    };
    fetchData();
  }, []);
  return <div>{apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}</div>;
};

export default HomePage;
