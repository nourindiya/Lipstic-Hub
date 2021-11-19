import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MySingleOrder from './MySingleOder/MySingleOrder';

const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])





    return (
        <div>
            <h1 className="tittle mt-3">My Orders</h1>

            <table className="table mt-3 ">
                <thead >
                    <tr>
                        <th>Product</th>
                        <th>Order Stats</th>
                        <th>Cancel Order</th>
                    </tr>

                </thead>
                <tbody className="mb-3">
                    {
                        orders.map(order =>
                            <MySingleOrder
                                key={order._id}
                                order={order}
                                setOrders={setOrders}
                                orders={orders}
                            ></MySingleOrder>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;