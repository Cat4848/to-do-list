import { useState } from 'react';
import {
  BsCheck2All,
  BsCheckCircleFill,
  BsFillPencilFill,
  BsXLg,
} from 'react-icons/bs';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function ToDo({ todo, onComplete, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(todo.name);

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
        {isEditing ? (
          <Col>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Col>
        ) : (
          <Col>{todo.name}</Col>
        )}

        <Col>
          <Button
            variant={isEditing ? 'success' : 'primary'}
            onClick={() => {
              onEdit({ ...todo, name: inputValue });
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? <BsCheckCircleFill /> : <BsFillPencilFill />}
          </Button>
        </Col>

        <Col>
          <Button onClick={() => onDelete(todo.id)} variant="danger">
            <BsXLg />
          </Button>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}
