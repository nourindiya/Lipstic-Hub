import React from 'react';

const MySingleOrder = ({ order, setOrders, orders }) => {

    const { productName, status } = order;

    const handleOderDelete = (id) => {
        const procceed = window.confirm('Are you sure to delete this ordder?')
        if (procceed) {
            fetch(`https://shrouded-badlands-09931.herokuapp.com/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainigOrders = orders.filter(singleOrder => singleOrder._id !== id);
                        setOrders(remainigOrders);
                    }
                })
        }
    }



    return (
        <tr>
            <td>{productName}
            </td>
            <td>{status}</td>
            <td><button onClick={() => handleOderDelete(order._id)} className="btn-2" type="submit">Cancel</button></td>
        </tr>
    );
};

export default MySingleOrder;