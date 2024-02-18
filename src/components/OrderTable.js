import OrderCard from "./OrderCard";
import { Row, Col } from "react-bootstrap";

const OrderTable = (props) => {
    const orderList = () => {
        if (props.orders) {
            let orderList = props.orders.map(order => {
                return (
                    <Col xxl={6} xl={6} lg={6} md={12} sm={12}><OrderCard order={order}/></Col>
                )
            })
            return <Row className="gy-3">{orderList}</Row>;
        }
    }

    return(
        <div>
            {props.orders === undefined && <h1>Order Table</h1>}
            {props.orders !== undefined && orderList()}
        </div>
    )
}

export default OrderTable;