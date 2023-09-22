import { useState } from 'react';
import { Modal, Button, Form, Stack, Container } from 'react-bootstrap';
import { Formik } from 'formik';
import { object, string, number, boolean } from 'yup';

export default function AddNewToDo({ nrOfToDos, onAddNewToDo }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const schema = object().shape({
    id: number().required(),
    name: string().required('Please enter to-do'),
    completed: boolean().required(),
  });

  function handleAddNewToDo(newToDo) {
    onAddNewToDo(newToDo);
    handleClose();
  }

  return (
    <Container className="mb-3">
      <Button onClick={handleShow}>Add ToDo</Button>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add New ToDo</Modal.Title>
        </Modal.Header>

        <Formik
          initialValues={{ id: nrOfToDos + 1, name: '', completed: false }}
          onSubmit={handleAddNewToDo}
          validationSchema={schema}
        >
          {({ handleSubmit, handleChange, touched, values, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Modal.Body>
                <Stack gap={3}>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                      isInvalid={!!errors.name}
                    ></Form.Control>
                    <Form.Control.Feedback
                      type={errors.name ? 'invalid' : 'valid'}
                    >
                      {errors.name ? errors.name : 'Looks Good!'}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Stack>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button type="submit">Save</Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </Container>
  );
}
