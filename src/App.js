import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Container from "react-bootstrap/Container";

function App() {

    const [todos, setTodos] = useState([]);

    let handleClick = (todoName) => {
        if (!todos.some(todo => todo.name == todoName))
            setTodos([...todos, { name: todoName, status: "Not Started" }]);
    }

    return (
        <div className="App">
            <Container>
                <h1 className="App-title">Manage Todos</h1>
                <Todos todos={todos} />
                <AddTodo text={"Add Todo"} handleClick={handleClick} />
            </Container>
        </div>
    );
}

export default App;
