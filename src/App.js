import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import ToDoList from "./components/ToDoList/ToDoList";

export default function App() {
  return (
    <Container>
      <h1>To-Do List</h1>
      <ToDoList/>
    </Container>

  )
}
