import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter.status);
  const dispatch = useDispatch();

  return (
    <div>
      <h6>Filter by status</h6>
      <ul>
        <li>
          <button
            onClick={() => {
              dispatch(setFilter(statusFilters.all));
            }}
          >
            All {filter === statusFilters.all && '+'}{' '}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              dispatch(setFilter(statusFilters.active));
            }}
          >
            Active {filter === statusFilters.active && '+'}{' '}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              dispatch(setFilter(statusFilters.completed));
            }}
          >
            Completed {filter === statusFilters.completed && '+'}{' '}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
