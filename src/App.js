import React from 'react';
import './App.css';
import Form from "./components/Form/Form";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
        <CssBaseline />
        <Container fixed>
            <Form/>
        </Container>
    </div>
  );
}

export default App;
