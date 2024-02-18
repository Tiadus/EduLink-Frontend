import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";

const BookTutor = () => {
    return (
        <Form className="bookForm">
            <Row className="mb-3">  
                <Col>
                    <Form.Group>
                        <Form.Label>Street Address:</Form.Label>
                        <Form.Control input type="text"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>City:</Form.Label>
                        <Form.Control input type="text"/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control input type="text"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>PostCode:</Form.Label>
                        <Form.Control input type="text"/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Subject:</Form.Label>
                        <Form.Control input type="text"/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group>
                        <Form.Label>Comment:</Form.Label>
                        <Form.Control input type="text"/>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col>
                    <InputGroup>
                    <InputGroup.Text>Payment</InputGroup.Text>
                        <Form.Control type="text" value={"$" + 200}/>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col className="contentCenter">
                    <Button variant="success" style = {{width: "30%"}}>
                        Book Tutor
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default BookTutor;