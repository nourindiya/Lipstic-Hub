import React from 'react';

const ManageSingleOrder = ({ order, orders, setOrders }) => {

    const { userName, productName, status } = order;


    const orderStatus = { status: "Approved" }

    const approveOrder = (id) => {
        fetch(`https://shrouded-badlands-09931.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Approved this order")
                }
            })
    }



    const orderReject = (id) => {
        const proceed = window.confirm('Are you sure to Reject this order?')
        if (proceed) {
            fetch(`https://shrouded-badlands-09931.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Rejected this order')
                        const remainingOrders = orders.filter(singleOrder => singleOrder._id !== id)
                        setOrders(remainingOrders);
                    }
                })
        }
    }





    return (

        <tr>
            <td>{productName}
                <br />
                {userName}
            </td>

            <td>{status}</td>
            <td>
                <button className="btn-2 mx-3" onClick={() => approveOrder(order._id)}
                    type="submit">Approve</button>

                <button className="btn-2" onClick={() => orderReject(order._id)} type="submit">Reject</button> </td>
        </tr>

    );
};

export default ManageSingleOrder;