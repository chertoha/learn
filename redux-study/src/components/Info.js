import { useSelector } from 'react-redux';

const Info = () => {
  const tasks = useSelector(state => state.tasks);

  const getCount = tasks => {
    return tasks.reduce(
      (acc, { completed }) => {
        completed ? acc.completed++ : acc.active++;
        return acc;
      },
      {
        active: 0,
        completed: 0,
      }
    );
  };

  const count = getCount(tasks);

  return (
    <div>
      <h6>Tasks</h6>
      <p>active: {count.active}</p>
      <p>completed: {count.completed}</p>
    </div>
  );
};

export default Info;
