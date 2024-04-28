import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { getTasks, getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { toggleCompleted, deleteTask } from 'redux/tasksSlice';

const Tasks = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);

      case statusFilters.completed:
        return tasks.filter(task => task.completed);

      default:
        return tasks;
    }
  };

  const visibleTasks = getVisibleTasks(tasks, filter);

  return (
    <div>
      <ul>
        {visibleTasks.map(({ id, text, completed }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => {
                dispatch(toggleCompleted(id));
              }}
            />
            <p>{text}</p>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteTask(id));
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
