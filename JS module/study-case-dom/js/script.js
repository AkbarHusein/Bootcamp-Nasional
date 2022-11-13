document.addEventListener('DOMContentLoaded', function () {
  // TODO 1: Load data agar data pada array muncul di page!
  loadData();

  // TODO 2: Ketikan kode agar form dapat berfungsi menambahkan todo baru!
  // TODO 3: Page tidak perlu direfresh ketika menambahkan todo baru!
  // TODO 4: Form harus dikosongkan setelah todo baru ditambahkan!

  const formInput = document.querySelector('form');
  formInput.addEventListener('submit', function (e) {
    e.preventDefault();
    addTodo();
    formInput.reset();
  });
});
