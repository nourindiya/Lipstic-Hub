import React, { useEffect, useState } from 'react';
import MySingleOrder from './MySingleOder/MySingleOrder';

const MyOrders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {

        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h1 className="tittle">My Orders</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Order Stats</th>
                        <th>Action</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <MySingleOrder
                                key={order._id}
                                order={order}
                            ></MySingleOrder>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;