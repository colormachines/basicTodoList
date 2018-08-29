document.getElementById("myForm").addEventListener('submit',saveTask);

function saveTask(e){

  let taskName= document.getElementById("task-name").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let priority = document.getElementById("priority").value;
  let description = document.getElementById("description").value;

  let task={
    name:taskName,
    date:date,
    time:time,
    priority:priority,
    description:description
  }
  if(localStorage.getItem('taskStorage')===null){
    let taskArray = [];
    taskArray.push(task);
    localStorage.setItem('taskStorage',JSON.stringify(taskArray));
  }
  else{
    let taskTempStorage= JSON.parse(localStorage.getItem('taskStorage'));
    taskTempStorage.push(task);
    localStorage.setItem('taskStorage',JSON.stringify(taskTempStorage));
  }
  fetchTask();
  e.preventDefault();
}

 function fetchTask(){
   var taskArray = JSON.parse(localStorage.getItem('taskStorage'));
   var createdTask = document.getElementById('createdTask');
   var taskName = document.getElementById('task-name').value;
  createdTask.innerHTML ='';
   for(let i =0; i<taskArray.length;i++){
     let name = taskArray[i].name;
     let date = taskArray[i].date;
     let time = taskArray[i].time;
     let priority = taskArray[i].priority;
     let description= taskArray[i].description;

     createdTask.innerHTML += '<div id ="'+name+'" class="cards card card-body bg-light">'+
                              '<h3>'+name+
                              '<a onclick ="deleteBookmark(\''+time+'\')" class="spacing btn btn-danger" href="#">Remove</a>'+
                              '</h3>'+'<p>'+description+'</p>'+'<p>Date:</p>'+date+'<p>Time:</p>'+time+
                              '</div>';

   }
 }
