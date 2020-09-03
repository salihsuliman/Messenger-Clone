import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {

  const [input, setInput] = useState('');
  const [messages, setMesssages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter you name'))
  }, [])

  useEffect(() => {

    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMesssages(snapshot.docs.map(doc => ({id: doc.id ,message: doc.data()})))
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"></img>
      <h1>Facebook messenger </h1>
      <h2>Welcome {username}</h2>


      <form className="app_form">
          <FormControl className="app_formControl">
            <Input className="app_input" size="10" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
            <IconButton className="app_iconButton" disabled={!input} color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
            </IconButton>


          </FormControl>

   
      </form>




    <div style={{ height: '10%'}}>
  <FlipMove typeName={null}>
  {
      messages.map(({id, message}) => (
        <Message key={id} username={username} message={message} />
     
      ))

    }

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

  </FlipMove>
</div>




    </div>



  );
}

export default App;
