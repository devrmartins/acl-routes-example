import "./App.css";
import { Routes } from "./routes/routes";

function App() {
    const currentRole = "FREEDOM";
    return <Routes currentRole={currentRole} />;
}

export default App;
