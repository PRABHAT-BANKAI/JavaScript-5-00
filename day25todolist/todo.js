const addBtn = document.querySelector("#addBtn");
let array = [];
addBtn.addEventListener("click", () => {
  const inputData = document.querySelector("#todoInput").value;
  console.log(inputData);

  array.push(inputData);

  console.log(array);
});
