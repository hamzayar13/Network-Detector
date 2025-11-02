import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [onLine, setOnline] = useState(navigator.onLine);

  const handleOnline = () => {
    console.log("You are back online!");
    setOnline(true);
  };
  useEffect(() => {
    const handleOffline = () => {
      console.log("You went offline!");
      setOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <>
      <h1>Network Status Detector</h1>
      {onLine ? <p>You're Online</p> : <p>You're Offline</p>}
    </>
  );
}

export default App;
