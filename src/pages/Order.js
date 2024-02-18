import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";

const Order = () => {
    return (
        <Form className="viewForm">
            <Row className="mb-3">  
                <Col>
                    <Form.Group>
                        <Form.Label>Address:</Form.Label>
                        <Form.Control input type="text" value={""}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group>
                        <Form.Label>Request Status:</Form.Label>
                        <Form.Control input type="text" value={""}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Request Code:</Form.Label>
                        <Form.Control input type="text" value={""}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Subject:</Form.Label>
                        <Form.Control input type="text" value={""}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group>
                        <Form.Label> Client Comment:</Form.Label>
                        <Form.Control input type="text" value={""}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <InputGroup>
                    <InputGroup.Text>Payment:</InputGroup.Text>
                        <Form.Control type="text" value={"$" + 200}/>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col>
                    <InputGroup>
                    <InputGroup.Text>Assigned Tutor:</InputGroup.Text>
                        <Form.Control type="text" value={"Albedo"}/>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col className="contentCenter">
                    <Button variant="success" style = {{width: "30%"}}>
                        Action
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Order;