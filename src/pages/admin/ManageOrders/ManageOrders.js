import React from 'react';
import ManageSingleOrder from './ManageSingleOrder/ManageSingleOrder';

const ManageOrders = () => {
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
                    <ManageSingleOrder></ManageSingleOrder>

                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;