import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const AddTask = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = e => {
    e.preventDefault();

    const form = e.target;
    const taskText = form.elements.text.value;
    dispatch(addTask(taskText));
    form.reset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" name="text" />
      <button type="submit">Add task</button>
    </form>
  );
};

export default AddTask;
