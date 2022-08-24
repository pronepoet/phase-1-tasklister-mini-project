document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // alert("hi")
  let add = document.querySelector('form')
  add.addEventListener('submit', (event)=>{
    event.preventDefault();
   buildToDo(event.target.new.value);

  //  clears the form after adding task
   add.reset()
  })

  // creates the elements and listening events here
  function buildToDo(todo){
    let p = document.createElement('li');
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x';
    p.textContent = `${todo} `
    document.querySelector('ul').appendChild(p)
    p.appendChild(btn)
  }

  // removes the list
  function handleDelete(e){
e.target.parentNode.remove()
  }
 
});
