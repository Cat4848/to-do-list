import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

export default function SearchBar({ input, onSearch }) {
  return (
    <Container className='mb-5'>
      <InputGroup>
        <InputGroup.Text>Search Tasks</InputGroup.Text>
        <Form.Control
          value={input}
          onChange={(e) => onSearch(e.target.value)}
        ></Form.Control>
      </InputGroup>
    </Container>
  );
}