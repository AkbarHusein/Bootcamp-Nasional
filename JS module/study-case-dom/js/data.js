// Jangan mengubah kode di bawah ini!
const todoList = [
  {
    title: 'Skripsian',
    message: 'Yahaha',
    selesai: false,
  },
  {
    title: 'Service AC',
    message: 'Ac Tetangga',
    selesai: true,
  },
];

function loadData() {
  refreshDOM(todoList);
}

function addTodo() {
  const title = document.getElementById('title').value;
  const message = document.getElementById('message').value;

  const newTodo = {
    title,
    message,
    selesai: false,
  };

  // TODO 5: Tambahkan todo baru ke array todoList!
  todoList.push(newTodo);
  // TODO 6: Lakukan refresh DOM!
  refreshDOM(todoList);
}
