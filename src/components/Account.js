import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./componentStyle.css"

const Account = () => {
    return (
        <div className="accountSection">
            <div className="accountInformation">
                Email: darkoverlord@gmail.com <br/>
                Name: Dark Overlord <br/>
                Phone: 096969696969 <br/>
                Membership Duration: Till 15/03/2024 <br/>
                Current Card: 123xxxxxxxxxxxxx45 <br/>
            </div>
            <div className="mt-3">
                <Button variant="success" style={{marginRight:"6%"}}>Edit Contact Email</Button>
                <Button variant="success">Edit Phone Number</Button>
            </div>
            <div className="mt-3">
                <Button variant="success" style={{marginRight:"6%"}}>Edit Payment Card</Button>
                <Button variant="success">Extend Membership</Button>
            </div>
        </div>
    )
}

export default Account;