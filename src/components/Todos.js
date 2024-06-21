import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Todos = function ({ todos }) {
    return <Container>
        <ListGroup>
            {todos.map(todo => {
                return <Todo todo={todo}></Todo>
            })}
        </ListGroup>
    </Container>
};

const Todo = function ({ todo }) {
    return <ListGroupItem>{todo.name}</ListGroupItem>;
};

export default Todos;
