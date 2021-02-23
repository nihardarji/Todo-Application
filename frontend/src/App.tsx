import React from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EditTodo from './components/EditTodo';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Router>
        <Route render={() => <Header/>} /> 
        <Container className='my-3'>
            <Route exact path='/' component={TodoList} />
            <Route exact path='/edit/todo/:id?' component={EditTodo} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
