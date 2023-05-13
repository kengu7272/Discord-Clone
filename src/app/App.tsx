import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import Server from '../pages/server/Server';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Server" element={<Server name="Test Server 1" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
