import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
