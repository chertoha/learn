import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksInitial = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitial,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: text => {
        return {
          payload: {
            id: nanoid(),
            text: text,
            completed: false,
          },
        };
      },
    },

    deleteTask: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      const task = state.find(({ id }) => id === action.payload);
      task.completed = !task.completed;
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

export default tasksSlice;

// state.tasks.map(task => ({
//   ...task,
//   completed: task.id === action.payload ? !task.completed : task.completed,
// }));
