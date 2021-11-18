import React from 'react';

const MySingleOrder = ({ order }) => {

    const { name, status } = order;

    return (
        <tr>
            <td>{name}</td>
            <td>{status}</td>
            <td><button type="submit">Add</button></td>
        </tr>
    );
};

export default MySingleOrder;