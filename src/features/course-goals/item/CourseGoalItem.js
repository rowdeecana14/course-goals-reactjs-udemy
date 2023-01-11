import React from 'react';

import './CourseGoalItem.css';

function CourseGoalItem(props) {
    const deleteGoal = () => {
        props.deleteGoal(props.id);
    };

    return (
        <li className="goal-item" onClick={deleteGoal}>
            {props.children}
        </li>
    );
}

export default CourseGoalItem;