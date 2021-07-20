import React, { useState } from "react";
import AddReview from "./components/AddReview/AddReview.js";
import CurrentReview from "./components/CurrentReview/CurrentReview.js";

import "./App.css";

function App() {
    const [addReview, setAddReview] = useState(true);

    function showAddReview() {
        if (addReview === true) {
            setAddReview(!addReview);
        }
    }

    function showCurrentReview() {
        if (addReview === false) {
            setAddReview(!addReview);
        }
    }

    return (
        <div className="App">
            <h1>Course Review</h1>
            <div className="grey-card-container">
                {addReview ? <AddReview /> : <CurrentReview />}
            </div>
            <div className="view-selection-div">
                <button className="view-button" onClick={() => showAddReview()}>
                    Current Review
                </button>
                <button
                    className="view-button active-button"
                    onClick={() => showCurrentReview()}
                >
                    Add Review
                </button>
            </div>
        </div>
    );
}

export default App;
