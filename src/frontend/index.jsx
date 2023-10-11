import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Button, Text, TextField, User } from '@forge/react';
import { events, invoke } from '@forge/bridge';

const App = () => {
  var bot_response = "Hello";
  
  var user_query = "";
  const [isShown, setIsShown] = useState(bot_response);

  function handleSubmit(){
    setIsShown(user_query);
  }

  return (
    <>
      <Text>Please go ahead ask your questions here</Text>
      <TextField
      onChange={(value) =>{user_query = value;}}
    />
    <Button name="Submit" onClick={handleSubmit}>Submit query</Button>
    <Text>{isShown}</Text>
    
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
