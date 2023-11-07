import { useState, useEffect } from "react";

type MousePos = {
  x: number
  y: number
}

const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = useState<MousePos>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition
