import React, { useState } from 'react';

import CourseGoalList from './list/CourseGoalList';
import CourseInput from './input/CourseInput';

function CourseGoals() {
    const [courseGoals, setCourseGoals] = useState([
        { text: 'Do all exercises!', id: 'g1' },
        { text: 'Finish the course!', id: 'g2' }
    ]);
    
    const addGoal = enteredText => {
        setCourseGoals(prevGoals => {
        const updatedGoals = [...prevGoals];

        updatedGoals.unshift({ text: enteredText, id: `g${courseGoals.length + 1}` });
            return updatedGoals;
        });
    };
    
    const deleteGoal = goalId => {
        setCourseGoals(prevGoals => {

        const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
            return updatedGoals;
        });
    };
    
    let content = (
        <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
    );
    
    if (courseGoals.length > 0) {
        content = (
        <CourseGoalList items={courseGoals} deleteGoal={deleteGoal} />
        );
    }

    return (
        <div>
            <section id="goal-form">
                <CourseInput addGoal={addGoal} />
            </section>
            <section id="goals">
                {content}
            </section>
        </div>
    );
}

export default CourseGoals;