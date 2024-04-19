import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";

const App = () => (
    <div>
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" Component={Login} />
                <Route exact path="/" Component={Home} />
            </Routes>
        </BrowserRouter>
    </div>
);

export default App;
