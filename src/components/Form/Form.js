import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Form.module.css'

const Modal = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}><p>NON MI VORREI SBILANCIARE, MA IL CAMPO E' VUOTO!!</p></div>
        </div>
    )
}

const Form = (props) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const [enteredUsarname, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const submitHandler = (event) => {
        event.preventDefault();


        const userData = {
            username: enteredUsarname,
            age: enteredAge,
            id: Math.random().toString()
        }

        props.onSaveUser(userData)
        setEnteredUsername('')
        setEnteredAge('')
        if (enteredUsarname.trim().length === 0 && enteredAge.trim().length === 0) {
            setIsEmpty(false)
        }

    }

    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return (

        <div className={styles['form-wrapper']}>
            {!isEmpty && <Modal></Modal>}
            <form className={styles.form} onSubmit={submitHandler} >
                <div>
                    <label>Username</label>
                    <input type='text' onChange={usernameHandler} value={enteredUsarname} />
                </div>
                <div>
                    <label>Age</label>
                    <input type='number' onChange={ageHandler} value={enteredAge} />
                </div>
                <Button type='submit'></Button>
            </form>
        </div>
    )
}

export default Form;