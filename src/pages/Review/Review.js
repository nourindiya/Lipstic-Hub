import React from 'react';
import "./Review.css"

const Review = (props) => {
    const { name, description } = props.review
    return (
        <div>
            <div className="service pb-3 px-4 pt-2 text-center mx-auto bg-4">
                <h2>{name}</h2>
                <p>{description}</p>
            </div >
        </div>
    );
};

export default Review;