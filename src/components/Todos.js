import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Todos = function ({ todos, onToggleTodo }) {
    return <Container>
        <ListGroup>
            {todos.map(todo => {
                return <Todo key={todo.index} todo={todo} onToggleTodo={onToggleTodo}></Todo>
            })}
        </ListGroup>
    </Container>
};

const Todo = function ({ todo, onToggleTodo }) {
    return <ListGroupItem className={todo.status} onClick={() => {
        onToggleTodo(todo);
    }}>
        {todo.index}. {todo.name}
    </ListGroupItem>;
};

export default Todos;
