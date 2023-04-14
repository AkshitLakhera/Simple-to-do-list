
const submitbutton = document.querySelector("#submit");
submitbutton.addEventListener('click',(e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const desc =  document.querySelector('#desc').value;
    const todoList = JSON.parse(localStorage.getItem('todo')) || [];
    todoList.push({ title, desc });
    localStorage.setItem('todo', JSON.stringify(todoList));
    renderTodoList(todoList);
});

const deletebutton = document.querySelector("#deletebtn");
deletebutton.addEventListener('click',(e) => {
    e.preventDefault();
    localStorage.removeItem('todo');
    renderTodoList([]);

});

function renderTodoList(todoList) {
    const todo = document.getElementById('todo');
    todo.innerHTML = '';
    if (todoList.length === 0) {
        return;
    }
    todoList.forEach(item => {
        const itemHtml = `<h1>${item.title}</h1><p>${item.desc}</p>`;
        todo.innerHTML += itemHtml;
    });
}