import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Request = () => {
    const navigate = useNavigate();

    const handleBookingNavigation = () => {
        navigate("/booking");
    }

    return (
        <div className="requestSection">
            <h1>Welcome Dark Overlord</h1>
            <h2>Bright Future Starts Here. Book A Tutor Now!</h2>
            <Button variant="success" onClick={handleBookingNavigation}> Book Tutor</Button>
        </div>
    )
}

export default Request;