// // import { nanoid } from 'nanoid';
// import { createAction, nanoid } from '@reduxjs/toolkit';

// // export const addTask = text => {
// //   return {
// //     type: 'tasks/addTask',
// //     payload: {
// //       id: nanoid(),
// //       text: text,
// //       completed: false,
// //     },
// //   };
// // };

// export const addTask = createAction('tasks/addTask', text => {
//   return {
//     payload: {
//       id: nanoid(),
//       text: text,
//       completed: false,
//     },
//   };
// });

// // export const deleteTask = taskId => {
// //   return { type: 'tasks/deleteTask', payload: { taskId: taskId } };
// // };

// export const deleteTask = createAction('tasks/deleteTask');

// // export const toggleCompleted = taskId => {
// //   return { type: 'tasks/toggleCompleted', payload: { taskId: taskId } };
// // };

// export const toggleCompleted = createAction('tasks/toggleCompleted');

// // export const setFilter = status => {
// //   return { type: 'filters/setFilter', payload: { filterStatus: status } };
// // };

// export const setFilter = createAction('filters/setFilter');
