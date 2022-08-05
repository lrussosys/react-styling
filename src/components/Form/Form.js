import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";

const Form = (props) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [ageInvalid, setAgeInvalid] = useState(false);
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            username: enteredUsername,
            age: enteredAge,
            id: Math.random().toString(),
        };

        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setIsEmpty(false);
            props.onIsEmpty(isEmpty);
            props.onOpenModal(true);
        } else if (enteredAge <= 0) {
            setAgeInvalid(true)
            props.onOpenModal(true);
            props.onAgeInvalid(ageInvalid);
        }

        if (enteredUsername.length > 0 && enteredAge > 0) {
            props.onSaveUser(userData);
            setEnteredUsername("");
            setEnteredAge("");
        }

    };

    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value);
        setIsEmpty(false)
    };

    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <div className={styles["form-wrapper"]}>
            <form className={styles.form} onSubmit={submitHandler}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        onChange={usernameHandler}
                        value={enteredUsername}
                    />
                </div>
                <div>
                    <label>Age</label>
                    <input
                        type="number"
                        onChange={ageHandler}
                        value={enteredAge}
                    />
                </div>
                <Button type="submit"></Button>
            </form>
        </div>
    );
};

export default Form;
