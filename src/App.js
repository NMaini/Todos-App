import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Container from "react-bootstrap/Container";
import StatusFilter from "./components/StatusFilter";

function App() {

    const [todos, setTodos] = useState([]);

    let handleClick = (todoName) => {
        if (!todos.some(todo => todo.name == todoName))
            setTodos([...todos, { name: todoName, status: "Incomplete", index: todos.length + 1 }]);
    }

    let onToggleTodo = (_todo) => {
        let toggledTodo = todos.find(todo => todo.index == _todo.index);

        setTodos([...todos.slice(0, _todo.index), 
            { name: toggledTodo.name, status: toggledTodo.status == "Incomplete" ? "Completed" : "Incomplete" },
             ...todos.slice(_todo.index, todos.length)]);
    }

    return (
        <Container className="App">
            <StatusFilter />
            <Todos todos={todos} />
            <AddTodo text={"Add Todo"} handleClick={handleClick} onToggleTodo={onToggleTodo} />
        </Container>
    );
}

export default App;
