import "./App.css";
import { useEffect, useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Container from "react-bootstrap/Container";
import StatusFilter from "./components/StatusFilter";

function App() {

    const [todos, setTodos] = useState([]);
    const [visibleTodos, setVisibleTodos] = useState([]);
    const [filterStatus, setFilterStatus] = useState("All");

    function filterVisibleTodos() {
        if(filterStatus === "All")
            setVisibleTodos(todos);
        else if(filterStatus === "Completed")
            setVisibleTodos(todos.filter(t => t.status === "Completed"));
        else if(filterStatus === "Incomplete")
            setVisibleTodos(todos.filter(t => t.status === "Incomplete"));
        else {
            console.log("Invalid filter status");
            return;
        }
    }

    useEffect(() => {
        filterVisibleTodos();
        console.log("called");
    }, [todos, filterStatus]);

    let handleClick = (todoName) => {
        if (!todos.some(todo => todo.name === todoName))
            setTodos([...todos, { name: todoName, status: "Incomplete", index: todos.length + 1}]);
    }

    let onToggleTodo = (_todo) => {
        const newTodos = todos.map(todo => {
            if(todo.index === _todo.index){
                todo.status = todo.status === "Completed"? "Incomplete": "Completed";
                return todo;
            }

            return todo;
        });

        setTodos(newTodos);
    }

    let onFilterChange = (id) => {
        if(id === "All" || id === "Completed" || id === "Incomplete")
            setFilterStatus(id);
    }

    return (
        <Container className="App">
            <StatusFilter onFilterChange={onFilterChange}/>
            <Todos todos={visibleTodos} onToggleTodo={onToggleTodo}/>
            <AddTodo text={"Add Todo"} handleClick={handleClick}/>
        </Container>
    );
}


export default App;
