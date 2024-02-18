import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./componentStyle.css"
import OrderTable from "./OrderTable";

const History = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let fetchedOrders = [
            {
                requestCode: "TEST1",
                requestStatus: "1",
                requestFee: 200,
                requestAddress: "42 Legend Road, Ruin Kingdom, NSW 2500"
            },
            {
                requestCode: "TEST2",
                requestStatus: "1",
                requestFee: 200,
                requestAddress: "42 Legend Road, Ruin Kingdom, NSW 2500"
            },
            {
                requestCode: "TEST3",
                requestStatus: "1",
                requestFee: 200,
                requestAddress: "42 Legend Road, Ruin Kingdom, NSW 2500"
            }
        ]
        setOrders(fetchedOrders)
    }, [])

    return (
        <div className="historySection">
            <div className="contentCenter">
                <Button variant="success" className="refreshButton">Refresh List</Button>
            </div>
            <div className="listHolder">
                <OrderTable orders={orders}/>
            </div>
        </div>
    )
}

export default History;