import { useEffect, useState } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffOnline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffOnline);

    return function () {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffOnline);
    };
  }, []);

  return {isOnline , setIsOnline };
}
