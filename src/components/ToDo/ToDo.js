import { BsXLg } from 'react-icons/bs';
import { BsCheck2All } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function ToDo({ todo, onComplete }) {
  return (
    <Container className="mb-3">
      <Row className="justify-content-md-center">
        <Col>
          <Button
            variant={todo.completed ? 'success' : 'outline-dark'}
            onClick={() => onComplete({ ...todo, completed: !todo.completed })}
          >
            <BsCheck2All />
          </Button>
        </Col>
        <Col>{todo.name}</Col>

        <Col>
          <Button>
            <BsFillPencilFill />
          </Button>
        </Col>

        <Col>
          <Button variant="danger">
            <BsXLg />
          </Button>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}
