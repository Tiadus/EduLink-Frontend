import { Form, Modal, Row, Col, Button, InputGroup } from "react-bootstrap";
import "./Register.css"
import { useState } from "react";

const Register = () => {
    const [openPayment, setOpenPayment] = useState(false);
    const [showNotice, setShowNotice] = useState(false);

    const handleProceed = () => {
        setShowNotice(true);
    }

    const handleClose = () => {
        setShowNotice(false);
    }

    const handleOpenPayment = () => {
        setShowNotice(false);
        setOpenPayment(true);
    }

    const importantNotice = () => {
        return (
            <Modal
                show={showNotice}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Important Notice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    In order to create an account, you have to register a credit card
                    and make an upfront payment of $100 for annual membership fee!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleOpenPayment}>Understood</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const informationForm = () => {
        return (
            <div>
                <h1><u>Information</u></h1>
                <Form className="informationForm mt-4">
                    <Form.Group className="mb-3" controlId="formFullName">
                        <Form.Label>Full Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email"/>
                    </Form.Group>
                    <Row className="mb-4">
                        <Col>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Password"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formConfirm">
                                <Form.Label>Confirm Password:</Form.Label>
                                <Form.Control type="text" placeholder="Confirm Password"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3 contentCenter">
                        <Button
                        variant="success"
                        className="registerPageButton"
                        onClick={handleProceed}>Proceed</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }

    const paymentForm = () => {
        return (
            <div>
                <h1><u>Payment</u></h1>
                <Form className="informationForm mt-4">
                    <Form.Group className="mb-3" controlId="formCardNumber">
                        <Form.Label>Card Number:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Card Number"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCardOwner">
                        <Form.Label>Card Owner:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Card Owner"/>
                    </Form.Group>
                    <Row className="mb-4">
                        <Col>
                            <Form.Group>
                                <Form.Label>Expiration</Form.Label>
                                <InputGroup>
                                    <Form.Control type="text" placeholder="MM"/>
                                    <Form.Control type="text" placeholder="YY"/>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>CVV</Form.Label>
                                    <Form.Control type="text" placeholder="CVV"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3 contentCenter">
                        <Button variant="success" className="registerPageButton">Payment</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }

    return (
        <div>
            {importantNotice()}
            {informationForm()}
            {openPayment === true && paymentForm()}
        </div>
    )
}

export default Register;