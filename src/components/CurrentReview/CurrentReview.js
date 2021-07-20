import React, {useState, useEffect} from 'react';

import "./CurrentReview.css"

function CurrentReview () {
    const [addReview, setAddReview] = useState(true);

  return (
    <div className="current-reviews">
        <div className="indv-review">
            <p className="close-review">Close Issue</p>
            <p>Assigned<span>Username</span></p>
            <p>Priority<span>Low</span></p>
            <p>Description</p>
            <p className="description-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut officia molestiae tempore iste vel odio quas enim quae? Voluptatum necessitatibus odio reprehenderit, molestias nihil labore amet optio doloremque temporibus.
            </p>
            <hr />
        </div>
        <div className="indv-review">
            <p className="close-review">Close Issue</p>
            <p>Assigned<span>Username</span></p>
            <p>Priority<span>Low</span></p>
            <p>Description</p>
            <p className="description-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut officia molestiae tempore iste vel odio quas enim quae? Voluptatum necessitatibus odio reprehenderit, molestias nihil labore amet optio doloremque temporibus.
            </p>
            <hr />
        </div>
        <div className="indv-review">
            <p className="close-review">Close Issue</p>
            <p>Assigned<span>Username</span></p>
            <p>Priority<span>Low</span></p>
            <p>Description</p>
            <p className="description-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut officia molestiae tempore iste vel odio quas enim quae? Voluptatum necessitatibus odio reprehenderit, molestias nihil labore amet optio doloremque temporibus.
            </p>
            <hr />
        </div>
    </div>
  );
}

export default CurrentReview;