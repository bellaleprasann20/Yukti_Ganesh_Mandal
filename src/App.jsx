import { useState, useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const handleDone = useCallback(() => setShowSplash(false), []);

  return (
    <BrowserRouter>
      {showSplash && <SplashScreen onDone={handleDone} />}
      <AppRoutes />
    </BrowserRouter>
  );
}