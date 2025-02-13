let Todo = document.querySelector('#Todo');

function createTodo(name, content) {
    let new_todo = document.createElement('div');
    new_todo.innerText = `${name}: ${content}`;
    new_todo.classList.add('form-control');
    let trash_can = document.createElement('i');
    trash_can.classList.add('bi-trash');
    new_todo.appendChild(trash_can);
    trash_can.addEventListener('click', e => {
        new_todo.remove();
    })
    return new_todo;
}

let add_todo = document.querySelector('#add-todo');

let name_taker = document.querySelector('#name_taker');

let content_taker = document.querySelector('#content_taker');

add_todo.addEventListener('click', e => {
    Todo.appendChild(createTodo(name_taker.value, content_taker.value));
    name_taker.value = "";
    content_taker.value = "";
});