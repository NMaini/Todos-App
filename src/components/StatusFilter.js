import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const StatusFilter = function ({onFilterChange}) {

    let onButtonClick = (event) => {
        onFilterChange(event.target.id);
    };
    return (
        <Container className="Status-filter">
            <Button variant="primary" id={"All"} onClick={onButtonClick}>All</Button>{' '}
            <Button variant="warning" id={"Incomplete"} onClick={onButtonClick}>Incomplete</Button>{' '}
            <Button variant="success" id={"Completed"} onClick={onButtonClick}>Completed</Button>
        </Container>
    );
}

export default StatusFilter;