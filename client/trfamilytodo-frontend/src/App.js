      import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
      import  Auth  from "./pages/Auth";
      import "./scss/style.css"
      import Home from "./pages/home";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

<div></div>
export default App;
