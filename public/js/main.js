document.getElementById('addBtn').addEventListener('click', function(){
    const taskInput = document.querySelector('#newtask input');
    const title = taskInput.value.trim();

    if(title){
        fetch('/addItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        }).then(res => {
            if(res.ok){
                return res.json();
            } else {
                console.log("Failed to add todos");
            }
        }).then(newTodo => {
            if(newTodo){
                addTodoToUI(newTodo.title);
            }
        }).catch(err => {
            console.log('Error: ', err);
        });

        taskInput.value = '';
    }
});

function addTodoToUI(title) {
    const tasksList = document.querySelector('#tasks ul');
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = title;
    tasksList.appendChild(newTodoItem);
}