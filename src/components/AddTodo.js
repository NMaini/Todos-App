import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const AddTodo = function ({ text, handleClick }) {
    const [input, setInput] = useState("");

    let onAddTodo = function (e) {
        handleClick(input);
    }

    return <Container className="Add-todo">
        <InputGroup className="mb-3">
            <Button
                variant="primary"
                id="button-addon1"
                onClick={onAddTodo}>
                {text}
            </Button>
            <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
        </InputGroup>
    </Container>;
}

export default AddTodo;