import { createContext, useEffect, useState } from "react";


export const TaskStateContext = createContext();
const LOCAL_STORAGE_KEY = "todo:savedTasks";
const TaskContext = ({children}) => {
    const [tasks, setTasks] = useState([]);

    // updates state and local storage
  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

//   loads data from local storage
 function loadSavedTasks() {
     const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
     if (saved) {
       setTasks(JSON.parse(saved));
     }
   }
   useEffect(() => {
     loadSavedTasks();
   }, []);

   // function to add tasks
  function addTask(taskTitle, taskDescription) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),//function from browsers to generate unique ids
        title: taskTitle,
        description: taskDescription,
        isCompleted: false,
      },
    ]);
  }
//   function to toggle completion
  function toggleTaskCompletedById(taskId){
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }
//   function to delete
   function deleteTaskById(taskId) {
     const newTasks = tasks.filter((task) => task.id !== taskId);
     setTasksAndSave(newTasks);
   }
  return (
    <TaskStateContext.Provider
      value={{ tasks, addTask, toggleTaskCompletedById, deleteTaskById }}
    >
      {children}
    </TaskStateContext.Provider>
  );
}

export default TaskContext