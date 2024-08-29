import React, { useEffect, useState } from "react";

const useMouseLocation = () => {
  const [mouseLocation, setMouseLocation] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const getMouseLocation = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      setMouseLocation({ x, y });
    };

    window.addEventListener("mousemove", getMouseLocation);

    return () => {
      window.removeEventListener("mousemove", getMouseLocation);
    };
  },[]);
  return mouseLocation;
};

export default useMouseLocation;
