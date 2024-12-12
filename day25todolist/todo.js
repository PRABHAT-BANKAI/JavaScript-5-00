const addBtn = document.querySelector("#addBtn");
const inputData = document.querySelector("#todoInput");
const container = document.querySelector("#container");
let array = JSON.parse(localStorage.getItem("todolist")) || [];

addBtn.addEventListener("click", () => {
  // const inputData = document.querySelector("#todoInput")
  if (inputData.value == "") {
    alert("please enter your task");
    return;
  }

  array.push(inputData.value);
  showData();
  localStorage.setItem("todolist", JSON.stringify(array));
  inputData.value = "";
});

function showData() {
  container.innerHTML = "";
  array.forEach((element, index) => {
    let card = document.createElement("div");
    card.className = "card";
    let para = document.createElement("p");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    console.log(index);
    deleteBtn.addEventListener("click", () => {
      const filterData = array.filter((element, i) => {
        return i != index;
      });

      localStorage.setItem("todolist", JSON.stringify(filterData));
      showData();
    });
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    para.textContent = element;
    card.append(para, deleteBtn,editBtn);
    container.append(card);
  });
}

showData();
