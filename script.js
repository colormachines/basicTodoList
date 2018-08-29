document.getElementById("myForm").addEventListener('submit',saveTask);

var hp=0;
var mp=1;
var lp=2;
var key1 =hp;
var key2 =mp;
var key3 =lp;
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
 function deleteTask(name){
   var taskArray = JSON.parse(localStorage.getItem('taskStorage'));
   for(var i=0;i<taskArray.length;i++){
     if(taskArray[i].name === name){
       taskArray.splice(i,1);
     }
   }
   localStorage.setItem('taskStorage',JSON.stringify(taskArray));
   fetchTask();
 }
 function generateId(){
   hp++;
   mp++;
   lp++;
 }
 function fetchTask(){
   var taskArray = JSON.parse(localStorage.getItem('taskStorage'));
   var createdTask = document.getElementById('createdTask');
   var taskName = document.getElementById('task-name').value;

  createdTask.innerHTML ='';
   for(let i =0; i<taskArray.length;i++){
     generateId();
     let name = taskArray[i].name;
     let date = taskArray[i].date;
     let time = taskArray[i].time;
     let priority = taskArray[i].priority;
     let description= taskArray[i].description;
     createdTask.innerHTML += '<div id="test" class="cards card card-body bg-light">'+
     '<h3>'+name+' <a onclick ="deleteTask(\''+name+'\')" class="btn btn-danger" href="#">Delete</a></h3>'+
     '<p>'+description+'</p>'+
     '<div class="row">'+
     '<p id="paragraph-adjust">Date:</p>'+'<p id="left-spacing">'+date+'</p>'+
     '<p>Time: </p>'+'<p>'+time+'</p>'+
     '</div>'+
     '<form id="checkPriority">'+
       '<div class="row">'+
       '<div class=" testing custom-control custom-radio">'+
         '<input type="radio" class="custom-control-input" id="'+hp+key1+'" name="example1" value="customEx">'+
         '<label class="custom-control-label" for="'+hp+key1+'">High Priority</label>'+
       '</div>'+
       '<div class="testing custom-control custom-radio">'+
         '<input type="radio" class="custom-control-input" id="'+mp+key2+'" name="example1" value="md-radio">'+
         '<label class="custom-control-label" for="'+mp+key2+'">Medium Priority</label>'+
       '</div>'+
       '<div class="testing custom-control custom-radio">'+
         '<input type="radio" class="custom-control-input" id="'+lp+key3+'" name="example1" value="lp-radio">'+
         '<label class="custom-control-label" for="'+lp+key3+'">Low Priority</label>'+
       '</div>'+
     '</div>'+
     '</form>'+
     '</div>'
   }
 }
