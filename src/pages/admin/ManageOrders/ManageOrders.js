import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ManageSingleOrder from './ManageSingleOrder/ManageSingleOrder';

const ManageOrders = () => {

    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/orders")
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
                        <th>Order Stats</th>
                        <th>Approve/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <ManageSingleOrder

                        key={orders._id}
                        setOrders={setOrders}
                        orders={orders}
                    >


                    </ManageSingleOrder>

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;