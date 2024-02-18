import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/componentStyle.css"
import "./App.css";
import { Container } from "react-bootstrap";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";
import { useEffect } from "react";
import BookTutor from "./pages/BookTutor";
import Order from "./pages/Order";

function App() {
  useEffect(() => {
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <div className="logoHolder">
          <span className="appName">
            <span className="logo1Half">Edu</span>
            <span className="logo2Half">Link</span>
          </span>
        </div>
        <Container className="content">
          <Routes>
            <Route index element={<Main/>}></Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/booking" element={<BookTutor/>}/>
            <Route path="/order" element={<Order/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
