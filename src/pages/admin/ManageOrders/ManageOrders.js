import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ManageSingleOrder from './ManageSingleOrder/ManageSingleOrder';

const ManageOrders = () => {

    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("https://shrouded-badlands-09931.herokuapp.com/orders/manageOrders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])

    return (
        <div>
            <h1 className="tittle mt-3">Manage Orders</h1>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Order Status</th>
                        <th>Approve/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <ManageSingleOrder
                            key={orders._id}
                            setOrders={setOrders}
                            orders={orders}
                            order={order}
                        >
                        </ManageSingleOrder>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;