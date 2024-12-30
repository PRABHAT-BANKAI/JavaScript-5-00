let promise = new Promise((resolve, reject) => {
  if (12 % 2 == 0) {
    return resolve("even");
  } else {
    return reject("odd");
  }
});

promise
  .then((data) => {
    console.log(data,"resolve");
  })
  .catch((err) => {
    console.log(err,"error");
  });
