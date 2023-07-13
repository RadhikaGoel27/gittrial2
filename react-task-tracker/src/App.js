import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


const App=()=> {
  const [tasks,setTasks]=useState([ //use state hook
    {
     id:1,
     text:'meet doctor',
     day:'monday',
     reminder:true,
    },
    {
     id:2,
     text:'take out trash',
     day:'saturday',
     reminder:false,
    },
 ])

 const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
 }

 const toggleReminder=(id) =>{
  setTasks(tasks.map(
    (task) => task.id===id 
    ? {...task,reminder:!task.reminder}
    :task
  ))
 }


  return (
    <div className="container">
      <Header/>
      {tasks.length>0 
      ? (
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder} />
        )
      :(
      <h3>no tasks</h3>
      )
      }
      
    </div>
    
  );
}

export default App;
