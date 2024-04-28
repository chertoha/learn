// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// function fetchAllPosts() {
//   const url = `${BASE_URL}/posts`;
//   return fetch(url).then(r => r.json());
// }

// function fetchPostById(postId) {
//   const url = `${BASE_URL}/posts/${postId}`;
//   return fetch(url).then(r => r.json());
// }

// function fetchPostsByUserId(userId) {
//   const url = `${BASE_URL}/posts?userId=${userId}`;
//   return fetch(url).then(response => response.json());
// }

// function createPost(post) {
//   const url = `${BASE_URL}/posts`;

//   const options = {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   };

//   return fetch(url, options).then(response => response.json());
// }

// function updatePost(post) {
//   if (!post.id) {
//     return Promise.reject('NO POST ID IN POST!');
//   }

//   const url = `${BASE_URL}/posts/${post.id}`;

//   const options = {
//     method: 'PATCH',
//     body: JSON.stringify(post),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   };

//   return fetch(url, options).then(response => response.json());
// }

// function deletePost(postId) {
//   const url = `${BASE_URL}/posts/${postId}`;

//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(url, options).then(response => response.json());
// }

// fetchAllPosts().then(console.log).catch(console.log);
// fetchPostById(15).then(data => console.log('fetch by id: ', data));
// fetchPostsByUserId(2).then(data => console.log('fetch by user ID: ', data));

// createPost({
//   author: 'Anton Chertok',
//   body: 'This is Anton Chertok post!',
// })
//   .then(post => console.log('create new post: ', post))
//   .catch(console.log);

// updatePost({
//   id: 101,
//   body: 'This is Anton Chertok post!  +  UPDATED!!!',
// })
//   .then(data => console.log('My updated post: ', data))
//   .catch(error => console.log('updatePOST error here -> ', error));

// deletePost(101).then(console.log('post deleted')).catch(console.log);
