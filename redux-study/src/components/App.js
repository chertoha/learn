import AddTask from './AddTask';
import Filter from './Filter';
import Info from './Info';
import Tasks from './Tasks';

export const App = () => {
  return (
    <div>
      <Info />
      <Filter />
      <AddTask />
      <Tasks />
    </div>
  );
};
