const text= document.querySelector('.todo-input');
const button= document.querySelector('.todo-button');
const taskList= document.querySelector('#task-list');
const taskTemplate= document.querySelector('#task-template');

button.addEventListener('click', function() {
    if (text === '') {
        return;
    }
   const templateContent=taskTemplate.content.cloneNode(true);
   const taskText= templateContent.querySelector('.task-text');
   taskText.innerText= text.value;
   const deleteButton= templateContent.querySelector('.delete-btn');
deleteButton.addEventListener('click', function(event){
               event.target.parentElement.remove();
});
   taskList.appendChild(templateContent);
   text.value= '';
   
});
