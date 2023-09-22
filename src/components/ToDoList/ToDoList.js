import { useState } from 'react';
import ToDo from '../ToDo/ToDo';
import AddNewToDo from '../AddNewToDo/AddNewToDo';
import { Badge } from 'react-bootstrap';

export default function ToDoList() {
  const initialToDos = [
    {
      id: 1,
      name: 'Pay water bill',
      completed: false,
    },
    {
      id: 2,
      name: 'Wash car',
      completed: true,
    },
    {
      id: 3,
      name: 'Read book',
      completed: false,
    },
  ];

  const [toDos, setToDos] = useState(initialToDos);
  const nrOfToDos = toDos.length;
  const outstandingToDos = toDos.filter(
    (todo) => todo.completed === false,
  ).length;

  function handleComplete(completedToDo) {
    const updatedToDos = toDos.map((todo) => {
      if (todo.id === completedToDo.id) {
        return completedToDo;
      }
      return todo;
    });
    setToDos(updatedToDos);
  }

  function handleDelete(id) {
    setToDos(toDos.filter((todo) => todo.id !== id));
  }

  function handleAddNewToDo(newToDo) {
    setToDos([...toDos, newToDo]);
  }

  function handleEdit(editedToDo){
    const updatedToDos = toDos.map(todo => {
      if(todo.id === editedToDo.id) {
        return editedToDo;
      }
      return todo
    })
    setToDos(updatedToDos);
  }

  return (
    <>
      <Badge bg="danger">{outstandingToDos}</Badge>
      <span>outstanding tasks</span>
      <AddNewToDo nrOfToDos={nrOfToDos} onAddNewToDo={handleAddNewToDo} />
      {toDos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          onComplete={handleComplete}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </>
  );
}
