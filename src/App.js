import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Container } from "react-bootstrap";
import Login from "./pages/Login";

function App() {
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
          <Login/>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
