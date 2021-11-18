import React from 'react';
import "./Notfound.css"

const Notfound = () => {
    return (
        <div>
            <div className="notfound-body">
                <img src="https://image.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1879.jpg" alt="" srcset="" />
            </div>
            <div>
                <p className="text-center text-danger">(Try Out Other Services)</p>
            </div>
        </div>
    );
};

export default Notfound;