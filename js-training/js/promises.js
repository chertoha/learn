const isSucces = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSucces) {
      resolve({ name: 'Anton', success: true });
    } else {
      reject({ success: false, error: 'Error from reject' });
    }
  }, 2000);
});

const a = myPromise.then(data => console.log(data)).catch(data => console.log(data));

const linkedPromises = new Promise((res, rej) => {
  res(5);
});

linkedPromises
  .then(data => {
    console.log('1 then, data = ', data);
    return data * 2;
  })
  .then(data => {
    console.log('2 then, data = ', data);
    return data * 2;
  })
  .then(data => {
    console.log('3 then, data = ', data);
    return data * 2;
  })
  .then(data => {
    console.log('finally data =', data);
  })
  .finally(() => {
    console.log('Finally');
  });
