import { useState } from 'react';
import ToDo from '../ToDo/ToDo';
import AddNewToDo from '../AddNewToDo/AddNewToDo';

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

  return (
    <>
      <AddNewToDo nrOfToDos={nrOfToDos} onAddNewToDo={handleAddNewToDo} />
      {toDos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
}
