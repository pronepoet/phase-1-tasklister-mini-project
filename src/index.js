document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector('create-task-form').addEventListener('submit', (event)=>{
    event.preventDefault();
   handleToDo(event.target.new-task-description.value);
  })
  function handleToDo(todo){
    let p = document.createElement('p');
    p.textContent = todo
    document.querySelector('tasks').appendChild(p)
  }
});
