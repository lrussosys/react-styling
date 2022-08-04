import React, { useState } from 'react';
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import User from './components/User/User';


function App() {


  const userArray = [
    { id: 'u1', username: 'Luigi', age: 26 },
    { id: 'u2', username: 'Ilaria', age: 24 }
  ]
  const [enteredArray, setArray] = useState(userArray)

  const onSaveHandler = (data) => {

    setArray((prevArray) => {
      console.log(data)
      return [data, ...prevArray]
    })
  }


  return (
    <div>
      <Card>
        <Form onSaveUser={onSaveHandler}></Form>
      </Card>
      <Card>
        {enteredArray.map((user) => {
         return (<User key={user.id} username={user.username} age={user.age}></User>)
        })}
      </Card>
    </div>

  );
}

export default App;
