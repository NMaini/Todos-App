import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const StatusFilter = function () {
    return (
        <Container className="Status-filter">
            <Button variant="primary">All</Button>{' '}
            <Button variant="warning">In-Complete</Button>{' '}
            <Button variant="success">Complete</Button>
        </Container>
    );
}

export default StatusFilter;