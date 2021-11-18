import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {

        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <p className="tittle fw-bold pt-5">Customer Reviews</p>
            <div className="service-container">
                {
                    reviews.map(review =>
                        <Review
                            key={review._id}
                            review={review}
                        >

                        </Review>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;