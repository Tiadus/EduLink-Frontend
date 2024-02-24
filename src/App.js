import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/componentStyle.css"
import "./App.css";
import { Container } from "react-bootstrap";
import Main from "./pages/Main";
import { useEffect, useState } from "react";
import BookTutor from "./pages/BookTutor";
import Order from "./pages/Order";
import { useSelector } from 'react-redux';

function App() {
  const userCode = useSelector((state) => state.user.userCode); //Used to distinguishe between customers
  const userType = useSelector((state) => state.user.userType); //Used to distinguishe between customer and admin
  
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
            <Route path="/booking" element={<BookTutor/>}/>
            <Route path="/order" element={<Order/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
