import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";

export default function Todo() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAddTask(e){
   
    if(newTask == ''){
      alert('Masukkan Text')
      e.preventDefault()
    }
    else{
    e.preventDefault()

    setTasks(prevTasks => [...prevTasks, {
      id: Math.random(),
      name: newTask,
      complete: false
    }])

    setNewTask('')
    }
        
  }

  function handleComplete(id) {

    const updateTask = tasks.map((tugas) => {
      if (id === tugas.id) {
        return {
          ...tugas,
          complete: !tugas.complete
        }
      }

      return tugas;

    });

    setTasks(updateTask)

  }

  function handleRemove(id) {
    if (confirm('press a button') === true){
      
      const removeTask = tasks.filter(tugas => tugas.id !== id)

      setTasks(removeTask)
      
    }

  }

  return(
    <div className="w-full h-screen flex justify-center">
      <div className="w-1/4 flex items-center">
        <Card>
          <Card.Title>
            <span>Todo List</span>
          </Card.Title>
            <form>
              <Card.Body>
                <div className="flex items-center gap-x-2">
                  <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                  <Button onClick={handleAddTask}>Add Task</Button>
                </div>
              </Card.Body>
            </form>
            {tasks.length > 0 ? 
              <ol className="p-2">

                {tasks.map(tugas => (

                  <li key={tugas.id} className="p-2 flex items-center justify-between">
                    <div>
                      <span className="px-2">{tugas.name}</span>
                      {tugas.complete ? <span className="p-1 bg-emerald-300 text-xs text-white font-bold ">Complete</span> 
                      : <span className="p-1 bg-yellow-300 text-xs text-white font-bold">Incomplete</span>}
                    </div>  
                    <div className="flex gap-x-1">
                      {tugas.complete ? <button className="p-1 bg-yellow-400 text-xs text-white rounded" onClick={() => handleComplete(tugas.id)}>Mark as incomplete</button> 
                      : <button className="p-1 bg-emerald-400 text-xs text-white rounded" onClick={() => handleComplete(tugas.id)}>Mark as Complete</button>}
                      <button className="p-1 bg-rose-600 text-xs text-white rounded" onClick={() => handleRemove(tugas.id)}>Remove</button>
                    </div>
                  </li>
                ))}
              </ol>
            
            : null}
            <Card.Footer>You have {tasks.length} task</Card.Footer>
        </Card>
      </div>
    </div>
  )
}