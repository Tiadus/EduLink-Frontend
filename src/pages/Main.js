import { Nav, Tab, Row, Col } from "react-bootstrap"
import "./Main.css"
import { useEffect, useState } from "react"
import LoginRegister from "../components/LoginRegister"
import Account from "../components/Account"
import Active from "../components/Active"
import History from "../components/History"
import Request from "../components/Request"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';

const Main = () => {
    const userCode = useSelector((state) => state.user.userCode); //Used to distinguishe between customers
    const userType = useSelector((state) => state.user.userType); //Used to distinguishe between customer and admin

    const [mainController, setMainController] = useState({
        account: false,
        active: true,
        history: false,
        request: false
    })

    const handleTabClick = (event) => {
        let target = event.target;
        let name = target.name;
        
        let controller = {
            account: false,
            active: false,
            history: false,
            request: false 
        }

        controller = {
            ...controller,
            [name]: true
        }

        setMainController(controller);
    }

    const content = () => {
        return (
            <Tab.Container defaultActiveKey={"active"}>
                <Row style={{height:"100%"}}>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-1">
                                <Nav.Link className="custom-nav-link" eventKey="account" name="account" onClick={handleTabClick}>Account</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mb-1">
                                <Nav.Link className="custom-nav-link" eventKey="active" name="active" onClick={handleTabClick}>Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mb-1">
                                <Nav.Link className="custom-nav-link" eventKey="history" name="history" onClick={handleTabClick}>History</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mb-1">
                                <Nav.Link className="custom-nav-link" eventKey="request" name="request" onClick={handleTabClick}>Request</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        {mainController.account === true && <Account/>}
                        {mainController.active === true && <Active/>}
                        {mainController.history === true && <History/>}
                        {mainController.request === true && <Request/>}
                    </Col>
                </Row>
            </Tab.Container>
        )
    }

    return (
        <div>
            {(userCode === 0 || userType === "") && <LoginRegister/>}
            {userCode !== 0 && userType !== "" && content()}
        </div>
    )
}

export default Main