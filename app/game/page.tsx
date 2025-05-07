"use client";
// react libraries
import React, { useEffect, useState } from "react";

const Games = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // https://edm-api.vdldemo.top/games"
      try {
        const response = await fetch("https://edm-api.vdldemo.top/games", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("api error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <p>This is the Game Selection</p>
      {apiData && <pre>{JSON.stringify(apiData, null, 2)}</pre>}
    </div>
  );
};

export default Games;
