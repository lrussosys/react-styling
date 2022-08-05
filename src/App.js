import React, { useState } from "react";
import Modal from "./components/Modal/Modal";

import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import User from "./components/User/User";

function App() {
    const [openModal, setOpenModal] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [ageInvalid, setAgeInvalid] = useState(false);
    const [modalText, setModalText] = useState("");

    const userArray = [
        { id: "u1", username: "Luigi", age: 26 },
        { id: "u2", username: "Ilaria", age: 24 },
        { id: "u3", username: "Massimo", age: 34 },
    ];

    const [enteredArray, setArray] = useState(userArray);

    const onSaveHandler = (data) => {
        setArray((prevArray) => {
            console.log(data);
            return [data, ...prevArray];
        });
    };

    const openModalHandler = (event) => {
        console.log(event);
        setOpenModal(true);
    };

    const closeModalHandler = (close) => {
        if (close) {
            setOpenModal(false);
        }
    };

    const isEmptyHandler = () => {
        setIsEmpty(true);
        setModalText("Uno o più campi sono vuoti");

        console.log("sono vuoto");
    };

    const ageInvalidHandler = () => {
        setAgeInvalid(true);
        setModalText("L'età inserita non è valida");
        console.log("età non valida");
    };

    return (
        <div>
            {openModal && (
                <Modal
                    onCloseModal={closeModalHandler}
                    modalText={modalText}
                ></Modal>
            )}
            <Card>
                <Form
                    onSaveUser={onSaveHandler}
                    onOpenModal={openModalHandler}
                    onIsEmpty={isEmptyHandler}
                    onAgeInvalid={ageInvalidHandler}
                ></Form>
            </Card>
            <Card>
                {enteredArray.map((user) => {
                    return (
                        <User
                            key={user.id}
                            username={user.username}
                            age={user.age}
                        ></User>
                    );
                })}
            </Card>
        </div>
    );
}

export default App;
