import React, { useEffect, useState } from "react";
import axios from "axios";

function Data() {
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    const fetchSegments = async () => {
      try {
        const res = await axios.get("http://localhost:8800/");
        setSegments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSegments();
  }, []);

  return (
    <div>
      <div className="segments">
        {segments.map((segment) => (
          <>
          <h1>The highest number of users who clicked first is {segment.Count} and answer is {segment.ANSWER}</h1> 
          </>
        ))}
      </div>
    </div>
  );
}

export default Data;
