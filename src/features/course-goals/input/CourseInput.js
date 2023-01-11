import React, { useState } from 'react';

import Button from '../../../components/ui/button/Button';
import styles from './CourseInput.module.css';
// import './CourseInput.css';
// import styled from 'styled-components';

// const FormControl = styled.div`
//     margin: 0.5rem 0;

//     & label {
//         font-weight: bold;
//         display: block;
//         margin-bottom: 0.5rem;
//         color: ${props => props.invalid ? 'red': 'black' };
//     }

//     & input {
//         display: block;
//         width: 100%;
//         border: 1px solid ${props => props.invalid ? 'red': ' #ccc' };
//         background: 1px solid ${props => props.invalid ? '#ffd7d7': 'transparent' };
//         font: inherit;
//         line-height: 1.5rem;
//         padding: 0 0.25rem;
//     }

//     & input:focus {
//         outline: none;
//         background: #fad0ec;
//         border-color: #8b005d;
//     }
// `;

function CourseInput(props) {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(true);


    const changeInput = event => {
        if(value.trim().length  > 0) {
            setIsValid(true);
        }

        setValue(event.target.value);
    };

    const submitForm = event => {
        event.preventDefault();

        if(value.trim().length  === 0) {
            setIsValid(false);
            return;
        }
        props.addGoal(value);
    };

    return (
        <form onSubmit={submitForm}>
            {/* <FormControl invalid={!isValid}>
                <label>Course Goal</label>
                <input type="text" onChange={changeInput}  />
            </FormControl> */}
            <div className={ `${styles['form-control']} ${ !isValid && styles.invalid}` }>
                <label>Course Goal</label>
                <input type="text" onChange={changeInput} 
                />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
}

export default CourseInput;