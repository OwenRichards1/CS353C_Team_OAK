import { Route, Routes, Navigate } from "react-router-dom";
import Cards from "./components/cards";
import Signup from "./components/signup";
import Login from "./components/Loginpage";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Cards />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
/*import "./App.css";
import CardDisplay from "./components/cards/CardDisplay.js";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <CardDisplay />
      </div>
    </div>
  );
}

export default App;*/