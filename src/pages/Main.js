import { Nav, Tab, Row, Col } from "react-bootstrap"
import "./Main.css"
import { useState } from "react"
import Account from "../components/Account"
import Active from "../components/Active"
import History from "../components/History"
import Request from "../components/Request"

const Main = () => {
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

export default Main