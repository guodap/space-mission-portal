import { useData } from "./hooks/useData";
import "./App.css";

const App = () => {
  const { data, loading, error } = useData(
    "https://api.spacexdata.com/v4/launches"
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;
  return <pre>{JSON.stringify(data)}</pre>;
};

export default App;
