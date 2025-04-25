import React from "react";

interface Args {
  callback: () => void;
  delay: null | number;
}

export function useInterval({ callback, delay }: Args) {
  const intervalRef = React.useRef<number | null>(null);
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => savedCallback.current();

    if (typeof delay === "number") {
      intervalRef.current = window.setInterval(tick, delay);

      return () => {
        if (intervalRef.current !== null) {
          window.clearInterval(intervalRef.current);
        }
      };
    }
  }, [delay]);

  return intervalRef;
}
