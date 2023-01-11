import React from 'react';

import CourseGoalItem from '../item/CourseGoalItem';
import './CourseGoalList.css';

function CourseGoalList(props) {
    return (
            <ul className="goal-list">
                {props.items.map(goal => (
                    <CourseGoalItem
                        key={goal.id}
                        id={goal.id}
                        deleteGoal={props.deleteGoal}
                    >
                        {goal.text}
                    </CourseGoalItem>
                ))}
        </ul>
    );
}

export default CourseGoalList;