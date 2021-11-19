import React from 'react';

const ManageSingleOrder = ({ orders }) => {

    const { userName, status } = orders;

    return (

        <tr>
            <td>{userName}
            </td>
            <td>{status}</td>
            <td>
                <button className="btn-2 mx-3" type="submit">Approve</button>
                <button className="btn-2" type="submit">delete</button>
            </td>
        </tr>

    );
};

export default ManageSingleOrder;