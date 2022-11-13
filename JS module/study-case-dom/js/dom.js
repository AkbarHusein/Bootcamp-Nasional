function refreshDOM(data) {
  // TODO 7: Perbaiki kode di bawah ini agar sesuai dengan spesifikasi
  const listBelumSelesai = document.getElementsByClassName(
    'todo-onproses__wrapper__'
  );
  const listSelesai = document.getElementsByClassName('todo-done__wrapper__');

  listBelumSelesai.innerHTML = '';
  listSelesai.innerHTML = '';

  for (let index = 0; index < data.length; index++) {
    //   TODO 8 : Ubah nilai undefined dari variable todoTitle menjadi nilai yang benar!
    const todoTitle = undefined;
    //   TODO 9 : Ubah nilai undefined dari variable todoMessage menjadi nilai yang benar!
    const todoMessage = undefined;
    //   TODO 10 : Ubah nilai undefined dari variable todoSelesai menjadi nilai yang benar!
    const todoSelesai = undefined;

    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');

    const descItem = document.createElement('div');
    descItem.classList.add('desc-item');

    const title = document.createElement('h3');
    title.classList.add('title');
    title.innerText = todoTitle;

    const message = document.createElement('p');
    message.classList.add('message');
    message.innerText = todoMessage;

    descItem.appendChild(title);
    descItem.appendChild(message);

    todoItem.appendChild(descItem);

    if (!todoSelesai) {
      const btnActionWrapper = document.createElement('div');
      btnActionWrapper.classList.add('btn-action__wrapper');

      const btnDone = document.createElement('button');
      btnDone.setAttribute('name', 'done');
      btnDone.innerText = '✅';

      btnDone.addEventListener('click', function () {
        const confirm = window.confirm('Apakah anda yakin?');
        data[index].selesai = confirm;
        refreshDOM(data);
      });

      const btnDelete = document.createElement('button');

      btnDelete.setAttribute('name', 'deconste');
      btnDelete.innerText = '❌';
      btnDelete.addEventListener('click', function () {
        const confirm = window.confirm('Apakah anda yakin?');
        confirm ? data.splice(index, 1) : null;
        refreshDOM(data);
      });

      // TODO 11 : Tambahkan button btnDone dan btnDelete ke dalam btnActionWrapper

      todoItem.appendChild(btnActionWrapper);
    }

    if (todoSelesai) {
      listSelesai.appendChild(todoItem);
    } else {
      listBelumSelesai.appendChild(todoItem);
    }
  }
}
