import { useEffect } from "react";
import { useAuthContext } from "./contexts/AuthContext/AuthContext";
import MyRoutes from "./routes/MyRoutes";

function App() {
  const { checkAuth } = useAuthContext();

  useEffect(() => {
    checkAuth();
  }, []);
  return <MyRoutes />;
}

export default App;
