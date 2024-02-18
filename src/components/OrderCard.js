import { Link } from "react-router-dom";

const OrderCard = ({order}) => {
    return(
        <div className="orderCard">
            Request Code: {order.requestCode} <br/>
            Request Status: {order.requestStatus} <br/>
            Client Payment: ${order.requestFee} <br/>
            Address: {order.requestAddress} <br/>
            <Link to="/order">View Detail</Link>
        </div>
    )
}

export default OrderCard;