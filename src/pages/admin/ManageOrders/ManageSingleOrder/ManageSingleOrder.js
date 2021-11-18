import React from 'react';

const ManageSingleOrder = () => {
    return (

        <tr>
            <td>Food</td>
            <td>pending</td>
            <td>
                <button className="btn-2 mx-3" type="submit">Approve</button>
                <button className="btn-2" type="submit">delete</button>
            </td>
        </tr>

    );
};

export default ManageSingleOrder;