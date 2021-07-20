import React, {useState, useEffect} from 'react';

import './AddReview.css';

function AddReview() {
    const [addReview, setAddReview] = useState(true);

  return (
    <div className="add-review">
        <form>
            <label>
                Description
                <input type="text"/>
            </label>
            <label>
                Assign to
               <select name="forDev" id="forDev">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select> 
            </label>
            <label>
                Priority level
               <select name="priority" id="priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Extra-High">Extra-High</option>
                </select> 
            </label>
            <button type="submit">
                Add
            </button>
        </form>
    </div>
  );
}

export default AddReview