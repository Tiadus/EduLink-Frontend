import { Row, Col, Form, Button } from "react-bootstrap";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [controller, setController] = useState({
        tutorLogin: false,
        clientLogin: false
    })

    const navigate = useNavigate()

    const handleRegister = () => {
        props.setLoginRegisterController(false);
    }

    const openLogin = (event) => {
        let target = event.target;
        let name = target.name;
        
        setController(prevState => ({
            ...prevState,
            [name]: true
        }));
    }

    const exitLogin = (event) => {
        let target = event.target;
        let name = target.name;
        
        setController(prevState => ({
            ...prevState,
            [name]: false
        }));
    }

    const tutorSectionInitial = () => {
        return (
            <Row className="gy-3" >
                <Col className="contentCenter" xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <span className="sectionName"><u>Edu Tutor</u></span>
                </Col>
                <Col className="contentCenter" xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <Button variant="success" className="button registerButton" onClick={handleRegister}>Register As Tutor</Button>
                </Col>
                <Col className="contentCenter" xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <Button variant="primary" name="tutorLogin" onClick={(event) => {openLogin(event)}} className="button loginButton">Login As Tutor</Button>
                </Col>
            </Row>
        );
    }
    
    const tutorSectionLogin = () => {
        return (
            <Form style={{width: "100%", padding:"2%"}}>
                <Form.Group className="mb-3" controlId="formTutorEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTutorPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"/>
                </Form.Group>
                <Form.Group className="mb-3 contentCenter">
                    <Button variant="primary" className="button loginButton">Login As Tutor</Button>
                </Form.Group>
                <Form.Group className=" mb-3 contentCenter">
                    <Button variant="danger" name="tutorLogin" onClick={(event) => {exitLogin(event)}} className="button">Return</Button>
                </Form.Group>
            </Form>
        ) 
    }
    
    const clientSectionInitial = () => {
        return (
            <Row className="gy-3" >
                <Col className="contentCenter" xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <span className="sectionName"><u>Edu Client</u></span>
                </Col>
                <Col className="contentCenter" xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <Button variant="success" className="button registerButton" onClick={handleRegister}>Register As Client</Button>
                </Col>
                <Col className="contentCenter" xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <Button variant="primary" name="clientLogin" onClick={(event) => {openLogin(event)}} className="button loginButton">Login As Client</Button>
                </Col>
            </Row>
        );
    }
    
    const clientSectionLogin = () => {
        return (
            <Form style={{width: "100%", padding:"2%"}}>
                <Form.Group className="mb-3" controlId="formClientEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formClientPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"/>
                </Form.Group>
                <Form.Group className="mb-3 contentCenter">
                    <Button variant="primary" className="button loginButton">Login As Client</Button>
                </Form.Group>
                <Form.Group className=" mb-3 contentCenter">
                    <Button variant="danger" name="clientLogin" onClick={(event) => {exitLogin(event)}} className="button">Return</Button>
                </Form.Group>
            </Form>
        ) 
    }

    return (
        <Row className="gx-4 gy-5">
            <Col className="tutorCol" xxl={6} xl={6} lg={6} md={12} sm={12}>
                <div className="tutorSection">
                    {controller.tutorLogin === false && tutorSectionInitial()}
                    {controller.tutorLogin === true && tutorSectionLogin()}
                </div>
            </Col>
            <Col className="clientCol">
                <div className="clientSection">
                    {controller.clientLogin === false && clientSectionInitial()}
                    {controller.clientLogin === true && clientSectionLogin()}
                </div>
            </Col>
        </Row>
    )
}

export default Login;